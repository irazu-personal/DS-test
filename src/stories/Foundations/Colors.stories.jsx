import React from 'react';

const colorGroups = [
  { name: 'Neutral', vars: ['neutral-0', 'neutral-25', 'neutral-50', 'neutral-100', 'neutral-200', 'neutral-300', 'neutral-400', 'neutral-500', 'neutral-600', 'neutral-700', 'neutral-800', 'neutral-900', 'neutral-1000'] },
  { name: 'Blue', vars: ['blue-25', 'blue-50', 'blue-100', 'blue-200', 'blue-300', 'blue-400', 'blue-500', 'blue-600', 'blue-700', 'blue-800', 'blue-900'] },
  { name: 'Brand', vars: ['brand-0', 'brand-25', 'brand-50', 'brand-100', 'brand-200', 'brand-300', 'brand-400', 'brand-500', 'brand-600', 'brand-700', 'brand-800', 'brand-900', 'brand-1000'] },
  { name: 'Red', vars: ['red-500', 'red-600'], name2: 'Green', vars2: ['green-500', 'green-600'] },
  { name: 'Orange', vars: ['orange-500'], name2: 'Extended', vars2: ['extended-foxtons-500', 'extended-turquoise-500', 'extended-purple-500', 'extended-pink-500'] },
];

function Swatch({ token }) {
  const varName = token.startsWith('color-') ? token : `color-${token}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 8,
          background: `var(--${varName})`,
          boxShadow: '0 1px 2px rgba(0,0,0,.1)',
        }}
      />
      <span style={{ fontSize: 11, color: 'var(--semantic-fg-03)' }}>{token}</span>
    </div>
  );
}

export default {
  title: '1-Foundations/Colors',
  parameters: { layout: 'padded' },
};

export function Palette() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {colorGroups.map((g) => (
        <div key={g.name}>
          <h3 style={{ marginBottom: 12, fontFamily: 'var(--font-families-sf-hebrew)', fontSize: 14, fontWeight: 600 }}>
            {g.name}
            {g.name2 && ` / ${g.name2}`}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {(g.vars || []).map((v) => (
              <Swatch key={v} token={v} />
            ))}
            {(g.vars2 || []).map((v) => (
              <Swatch key={v} token={v} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
