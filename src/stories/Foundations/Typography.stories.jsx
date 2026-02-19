import React from 'react';
import svgPaths from '../../imports/svg-vt52v229sr';

const sections = [
  {
    title: 'Title',
    rows: [
      { token: 'Title-1', size: '32', weight: 'Bold', lineHeight: '38', rem: '2', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: 'Page title', letterSpacing: '-0.4px' },
      { token: 'Title-2', size: '26', weight: 'Bold', lineHeight: '30', rem: '1.625', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '0' },
      { token: 'Title-3', size: '22', weight: 'Bold', lineHeight: '26', rem: '1.375', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '0' },
      { token: 'Title-4', size: '18', weight: 'Semibold', lineHeight: '24', rem: '1.125', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '-0.4px' },
      { token: 'Title-5', size: '16', weight: 'Semibold', lineHeight: '24', rem: '1', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: 'Main title in list', letterSpacing: '-0.4px' },
      { token: 'Title-6', size: '14', weight: 'Semibold', lineHeight: '20', rem: '0.875', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '-0.3px' },
    ],
  },
  {
    title: 'Body (md)',
    rows: [
      { token: 'Body-1-default', size: '16', weight: 'Regular', lineHeight: '24', rem: 'Base', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '-0.3px' },
      { token: 'Body-1-accent', size: '16', weight: 'Medium', lineHeight: '24', rem: 'Base', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '-0.3px' },
    ],
  },
  {
    title: 'Body (sm)',
    rows: [
      { token: 'Body-2-default', size: '14', weight: 'Regular', lineHeight: '20', rem: '0.875', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '-0.2px' },
      { token: 'Body-2-accent', size: '14', weight: 'Medium', lineHeight: '20', rem: '0.875', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '-0.3px' },
    ],
  },
  {
    title: 'Body (xs)',
    rows: [
      { token: 'Body-3-default', size: '12', weight: 'Regular', lineHeight: '16', rem: '0.75', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '0' },
      { token: 'Body-3-accent', size: '12', weight: 'Medium', lineHeight: '16', rem: '0.75', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', letterSpacing: '0' },
    ],
  },
];

const exampleText = 'שפן אכל קצת גזר בטעם חסה, ודי.';

const fontWeightMap = { Bold: 700, Semibold: 600, Medium: 500, Regular: 400 };
const fontStack = "'SF Hebrew', 'Noto Sans Hebrew', sans-serif";

function getExampleStyle(row) {
  return {
    fontFamily: fontStack,
    fontSize: `${row.size}px`,
    fontWeight: fontWeightMap[row.weight] ?? 400,
    lineHeight: `${row.lineHeight}px`,
    letterSpacing: row.letterSpacing && row.letterSpacing !== '0' ? row.letterSpacing : undefined,
    color: '#323232',
    margin: 0,
  };
}

function TitleRow() {
  const cellStyle = { fontFamily: 'Rubik, sans-serif', fontWeight: 400, lineHeight: 'normal', color: '#323232', fontSize: 26, margin: 0 };
  const rowStyle = { display: 'flex', gap: 28, alignItems: 'center', paddingBottom: 40, paddingTop: 24, paddingLeft: 24, paddingRight: 8, flexShrink: 0, width: '100%', borderBottom: '1px solid #e3e4e6' };
  const w = { token: 224, size: 100, weight: 169.778, rem: 100, ios: 169.778, android: 220, usage: 500, example: 169.778 };
  return (
    <div style={rowStyle}>
      <div style={{ padding: 8, width: w.token }}><p style={cellStyle}>Token</p></div>
      <div style={{ padding: 8, width: w.size }}><p style={cellStyle}>Size</p></div>
      <div style={{ padding: 8, width: w.weight }}><p style={cellStyle}>Weight</p></div>
      <div style={{ padding: 8, width: w.weight }}><p style={cellStyle}>Line height</p></div>
      <div style={{ padding: 8, width: w.rem }}><p style={cellStyle}>Rem</p></div>
      <div style={{ padding: 8, width: w.ios }}><p style={cellStyle}>IOS - Font</p></div>
      <div style={{ padding: 8, width: w.android }}><p style={cellStyle}>Android - Font</p></div>
      <div style={{ padding: 8, width: w.usage }}><p style={cellStyle}>Usage</p></div>
      <div style={{ padding: 8, width: w.example }}><p style={cellStyle}>Example</p></div>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div style={{ background: '#fbfbfb', width: '100%', position: 'relative', borderBottom: '1px solid #e3e4e6' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
        <p style={{ fontFamily: fontStack, fontWeight: 700, lineHeight: '38px', fontSize: 32, letterSpacing: '-0.4px', color: '#323232', margin: 0 }}>
          {title}
        </p>
      </div>
    </div>
  );
}

function DataRow({ row }) {
  const isWillBeAdded = row.usage.startsWith('*');
  const cellLabelStyle = { fontFamily: 'Rubik, sans-serif', fontWeight: 500, lineHeight: 'normal', color: '#323232', fontSize: 24, margin: 0 };
  const usageStyle = { fontFamily: isWillBeAdded ? 'Inter, sans-serif' : 'Rubik, sans-serif', fontWeight: 400, lineHeight: 'normal', color: '#737373', fontSize: 16, margin: 0 };
  const w = { token: 224, size: 100, weight: 169.778, rem: 100, ios: 169.778, android: 220, usage: 500 };
  const rowStyle = { background: '#fbfbfb', display: 'flex', gap: 28, alignItems: 'center', padding: '32px 8px', paddingLeft: 24, flexShrink: 0, width: '100%', position: 'relative', borderBottom: '1px solid #e3e4e6' };
  return (
    <div style={rowStyle}>
      <div style={{ padding: 8, width: w.token }}><p style={cellLabelStyle}>{row.token}</p></div>
      <div style={{ padding: 8, width: w.size }}><p style={cellLabelStyle}>{row.size}</p></div>
      <div style={{ padding: 8, width: w.weight }}><p style={cellLabelStyle}>{row.weight}</p></div>
      <div style={{ padding: 8, width: w.weight }}><p style={cellLabelStyle}>{row.lineHeight}</p></div>
      <div style={{ padding: 8, width: w.rem }}><p style={cellLabelStyle}>{row.rem}</p></div>
      <div style={{ padding: 8, width: w.ios }}><p style={cellLabelStyle}>{row.iosFont}</p></div>
      <div style={{ padding: 8, width: w.android }}><p style={{ ...cellLabelStyle, fontFamily: 'Noto Sans Hebrew, sans-serif', fontWeight: 400 }}>{row.androidFont}</p></div>
      <div style={{ padding: 8, width: w.usage }}><p style={usageStyle}>{row.usage}</p></div>
      <div style={{ padding: 8, minWidth: 170 }}><p style={getExampleStyle(row)}>{exampleText}</p></div>
    </div>
  );
}

function WidgetbookButton() {
  return (
    <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', right: 24, top: 15 }}>
      <div style={{ background: '#fff', display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center', padding: '8px 16px 8px 24px', borderRadius: 4, border: '1px solid #e3e4e6' }}>
        <a
          href="https://clarityo.github.io/mobile-ds/#/?path=foundation/typography/typography"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#1d1e20', textDecoration: 'none' }}
        >
          Widgetbook
        </a>
        <div style={{ width: 24, height: 24 }}>
          <svg width="17.5" height="17.5" viewBox="0 0 17.5 17.5" fill="none">
            <g>
              <path d={svgPaths.p2e770900} fill="#306FEB" />
              <path d={svgPaths.p12f25a80} fill="#306FEB" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default {
  title: '1-Foundations/Typography',
  parameters: { layout: 'padded' },
};

export function TextStyles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', minHeight: '100%', overflowX: 'auto', position: 'relative' }}>
      <TitleRow />
      <WidgetbookButton />
      {sections.map((section) => (
        <div key={section.title}>
          <SectionHeader title={section.title} />
          {section.rows.map((row) => (
            <DataRow key={row.token} row={row} />
          ))}
        </div>
      ))}
    </div>
  );
}
