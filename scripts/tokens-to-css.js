/**
 * Reads Tokens Studio (Figma) export and generates src/design-tokens.css
 * Uses: tokens-colors, tokens-shadows-font-spacing-corner-radius, text-styles.json
 * Supports: color, number, boxShadow, fontFamilies, fontSizes, lineHeights, fontWeights, letterSpacing, typography
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_PATH = path.join(ROOT, 'src', 'design-tokens.css');

// Token files to merge. unwrap: read this key from JSON first (e.g. "text-styles").
const TOKEN_SOURCES = [
  { file: 'tokens-colors/Global/Mode 1.json', prefix: 'color' },
  { file: 'tokens-colors/Semantic/Mode 1.json', prefix: 'semantic' },
  { file: 'tokens-shadows-font-spacing-corner-radius/spacing/Mode 1.json', prefix: '' },
  { file: 'tokens-shadows-font-spacing-corner-radius/padding/Mode 1.json', prefix: '' },
  { file: 'tokens-shadows-font-spacing-corner-radius/corner-radius/Mode 1.json', prefix: '' },
  { file: 'text-styles.json', prefix: 'text-style', unwrap: 'text-styles' },
];

function toKebab(str) {
  return String(str).replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Convert CSS var key to ref key for {fontSize.6}, {fontWeights.sf-hebrew-0}
function kebabToRefKey(k) {
  const parts = k.split('-');
  if (parts.length < 2) return k;
  const first = parts[0];
  const second = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  if (parts.length === 2) return first + second;
  return first + second + '.' + parts.slice(2).join('-');
}

function resolveTypoRef(v, refMap) {
  if (typeof v !== 'string') return v;
  const m = v.match(/^\{(.+)\}$/);
  if (!m) return v;
  const ref = m[1];
  return refMap[ref] || refMap[ref.replace(/^([a-z]+)\./, (_, p) => p.charAt(0).toLowerCase() + p.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + '.')] || v;
}

function flattenTokens(obj, prefix = '', refMap = null) {
  const out = {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const name = prefix ? `${prefix}-${toKebab(key)}` : toKebab(key);
    if (val !== null && typeof val === 'object' && '$value' in val) {
      const type = val.$type || 'string';
      const v = val.$value;
      if (type === 'typography' && refMap && typeof v === 'object') {
        const family = resolveTypoRef(v.fontFamily, refMap);
        const weight = resolveTypoRef(v.fontWeight, refMap);
        const lineHeight = resolveTypoRef(v.lineHeight, refMap);
        const fontSize = resolveTypoRef(v.fontSize, refMap);
        const letterSpacing = resolveTypoRef(v.letterSpacing, refMap);
        if (family !== undefined) out[`${name}-font-family`] = family;
        if (weight !== undefined) out[`${name}-font-weight`] = fontWeightToCss(weight) || weight;
        if (lineHeight !== undefined) out[`${name}-line-height`] = lineHeight;
        if (fontSize !== undefined) out[`${name}-font-size`] = fontSize;
        if (letterSpacing !== undefined) out[`${name}-letter-spacing`] = typeof letterSpacing === 'number' ? letterSpacing + 'em' : letterSpacing;
        continue;
      }
      if (prefix && prefix.startsWith('text-style') && type !== 'typography') continue;
      if (type === 'color') {
        out[name] = resolveRef(v);
      } else if (type === 'number') {
        out[name] = (typeof v === 'number' ? v : parseFloat(v)) + 'px';
      } else if (type === 'boxShadow') {
        out[name] = boxShadowToCss(v);
      } else if (type === 'fontFamilies') {
        out[name] = typeof v === 'string' ? `"${v}"` : v;
      } else if (type === 'fontSizes') {
        out[name] = (typeof v === 'number' ? v : parseFloat(v)) + 'px';
      } else if (type === 'lineHeights') {
        out[name] = (typeof v === 'number' ? v : parseFloat(v)) + 'px';
      } else if (type === 'letterSpacing') {
        out[name] = typeof v === 'number' ? (v + 'em') : v;
      } else if (type === 'fontWeights') {
        out[name] = fontWeightToCss(v);
      } else if (type === 'dimension' && typeof v === 'string') {
        out[name] = v;
      } else if (type === 'paragraphSpacing' && typeof v === 'number') {
        out[name] = v + 'px';
      } else if (typeof v === 'string' || typeof v === 'number') {
        out[name] = resolveRef(v);
      }
    } else if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(out, flattenTokens(val, name, refMap));
    }
  }
  return out;
}

let colorMap = {}; // for resolving {Blue.500} etc.

function resolveRef(v) {
  if (typeof v !== 'string') return v;
  const m = v.match(/^\{(.+)\}$/);
  if (!m) return v;
  const ref = m[1].replace(/\./g, '-').toLowerCase();
  return colorMap[ref] || colorMap[ref.replace(/^color-/, '')] || v;
}

function boxShadowToCss(v) {
  const arr = Array.isArray(v) ? v : [v];
  return arr
    .map((s) => {
      if (typeof s === 'string') return s;
      const { x = 0, y = 0, blur = 0, spread = 0, color = '#000' } = s;
      return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    })
    .join(', ');
}

function fontWeightToCss(v) {
  const map = { Bold: '700', Semibold: '600', Medium: '500', Regular: '400' };
  return map[v] || v;
}

function collectColors(obj, prefix = '') {
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const name = prefix ? `${prefix}-${key}` : key;
    if (val !== null && typeof val === 'object' && val.$type === 'color' && typeof val.$value === 'string' && !val.$value.startsWith('{')) {
      const k = name.toLowerCase();
      colorMap[k] = val.$value;
      if (k.startsWith('color-')) colorMap[k.replace(/^color-/, '')] = val.$value;
    } else if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      collectColors(val, name);
    }
  }
}

function main() {
  const allVars = {};
  const refMap = {};
  for (const { file, prefix, unwrap } of TOKEN_SOURCES) {
    const filePath = path.join(ROOT, file);
    if (!fs.existsSync(filePath)) {
      console.warn('Skip (not found):', file);
      continue;
    }
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (unwrap && data[unwrap]) data = data[unwrap];
    if (file.includes('tokens-colors') && file.includes('Global')) {
      collectColors(data, prefix);
    }
    const flat = flattenTokens(data, prefix, refMap);
    for (const [k, v] of Object.entries(flat)) {
      if (v !== undefined && v !== null) {
        allVars[k] = v;
        refMap[kebabToRefKey(k)] = v;
      }
    }
  }
  const lines = Object.entries(allVars).map(([k, v]) => `  --${k}: ${v};`).join('\n');
  const css = `/* Generated from Tokens Studio + text-styles — do not edit by hand. Run: npm run build:tokens */\n:root {\n${lines}\n}\n`;
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, css, 'utf8');
  console.log('Generated src/design-tokens.css from Tokens Studio export and text-styles.json.');
}

main();
