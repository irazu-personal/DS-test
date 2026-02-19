import React from 'react';

const spacingTokens = [
  'spacing-01', 'spacing-02', 'spacing-03', 'spacing-04', 'spacing-05', 'spacing-06', 'spacing-07',
];
const paddingTokens = [
  'padding-01', 'padding-02', 'padding-03', 'padding-04', 'padding-05', 'padding-06', 'padding-07', 'padding-08', 'padding-09',
];

export default {
  title: '1-Foundations/Spacing',
  parameters: { layout: 'padded' },
};

export function SpacingScale() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Spacing</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 8 }}>
          {spacingTokens.map((t) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div
                style={{
                  height: 'var(--' + t + ')',
                  width: 32,
                  minHeight: 2,
                  background: 'var(--color-blue-500)',
                  borderRadius: 4,
                }}
              />
              <span style={{ fontSize: 11, color: 'var(--semantic-fg-03)' }}>{t}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Padding</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 8 }}>
          {paddingTokens.map((t) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div
                style={{
                  padding: 'var(--' + t + ')',
                  background: 'var(--color-neutral-100)',
                  borderRadius: 4,
                  border: '1px solid var(--semantic-border-04)',
                }}
              >
                <span style={{ fontSize: 10, color: 'var(--semantic-fg-03)' }}>box</span>
              </div>
              <span style={{ fontSize: 11, color: 'var(--semantic-fg-03)' }}>{t}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
