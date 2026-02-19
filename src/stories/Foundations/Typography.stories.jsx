import React from 'react';

const styles = [
  { label: 'Title 1', varBase: 'text-style-title-title-1' },
  { label: 'Title 2', varBase: 'text-style-title-title-2' },
  { label: 'Title 3', varBase: 'text-style-title-title-3' },
  { label: 'Title 4', varBase: 'text-style-title-title-4' },
  { label: 'Title 5', varBase: 'text-style-title-title-5' },
  { label: 'Title 6', varBase: 'text-style-title-title-6' },
  { label: 'Body 1 (default)', varBase: 'text-style-body-md-body-1-default' },
  { label: 'Body 1 (accent)', varBase: 'text-style-body-md-body-1-accent' },
  { label: 'Body 2 (default)', varBase: 'text-style-body-sm-body-2-default' },
  { label: 'Body 2 (accent)', varBase: 'text-style-body-sm-body-2-accent' },
  { label: 'Body 3 (default)', varBase: 'text-style-body-xs-body-3-default' },
  { label: 'Body 3 (emphasize)', varBase: 'text-style-body-xs-body-3-emphasize' },
];

function TextSample({ label, varBase }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 11, color: 'var(--semantic-fg-03)', marginBottom: 4 }}>{label}</div>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--' + varBase + '-font-family)',
          fontSize: 'var(--' + varBase + '-font-size)',
          fontWeight: 'var(--' + varBase + '-font-weight)',
          lineHeight: 'var(--' + varBase + '-line-height)',
          letterSpacing: 'var(--' + varBase + '-letter-spacing)',
          color: 'var(--semantic-fg-01)',
        }}
      >
        The quick brown fox jumps over the lazy dog. 0123456789
      </p>
    </div>
  );
}

export default {
  title: '1-Foundations/Typography',
  parameters: { layout: 'padded' },
};

export function TextStyles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 560 }}>
      {styles.map((s) => (
        <TextSample key={s.varBase} label={s.label} varBase={s.varBase} />
      ))}
    </div>
  );
}
