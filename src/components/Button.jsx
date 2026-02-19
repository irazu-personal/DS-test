import React from 'react';

const baseStyle = {
  fontFamily: 'var(--font-families-sf-hebrew)',
  fontSize: 'var(--font-size-2)',
  fontWeight: 600,
  lineHeight: 'var(--line-heights-5)',
  padding: 'var(--padding-03) var(--padding-07)',
  borderRadius: 'var(--corner-radius-03)',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'background-color 0.15s, color 0.15s',
};

const variants = {
  primary: {
    background: 'var(--semantic-bg-emphasis)',
    color: 'var(--semantic-fg-00)',
    borderColor: 'transparent',
  },
  secondary: {
    background: 'var(--semantic-bg-00)',
    color: 'var(--semantic-fg-01)',
    borderColor: 'var(--semantic-border-02)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--semantic-fg-emphasis)',
    borderColor: 'transparent',
  },
};

export function Button({ children, variant = 'primary', disabled, ...props }) {
  const style = { ...baseStyle, ...(variants[variant] || variants.primary) };
  if (disabled) {
    style.background = 'var(--semantic-bg-state-disabled-02)';
    style.color = 'var(--semantic-fg-state-disabled-01)';
    style.cursor = 'not-allowed';
  }
  return (
    <button type="button" style={style} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
