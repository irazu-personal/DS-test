import React from 'react';

const radiusTokens = [
  'corner-radius-00',
  'corner-radius-01',
  'corner-radius-02',
  'corner-radius-03',
  'corner-radius-04',
  'corner-radius-05',
  'corner-radius-06',
  'corner-radius-full',
];

export default {
  title: 'Foundations/Corner radius',
  parameters: { layout: 'padded' },
};

export function RadiusScale() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Corner radius</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 24 }}>
          {radiusTokens.map((t) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: 'var(--color-neutral-100)',
                  border: '1px solid var(--semantic-border-04)',
                  borderRadius: 'var(--' + t + ')',
                }}
              />
              <span style={{ fontSize: 11, color: 'var(--semantic-fg-03)' }}>{t}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
