import React, { useState } from 'react';
import './Button.css';

const baseStyle = {
  display: 'inline-flex',
  height: 48,
  minHeight: 48,
  maxHeight: 48,
  padding: '0 var(--padding-07)',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'var(--padding-03)',
  fontFamily: 'var(--font-families-sf-hebrew)',
  fontSize: 'var(--font-size-2)',
  fontWeight: 600,
  lineHeight: 'var(--line-heights-5)',
  borderRadius: 'var(--corner-radius-03)',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background-color 0.15s, color 0.15s, border-color 0.15s',
};

const variants = {
  primary: {
    background: 'var(--semantic-bg-01)',
    color: 'var(--semantic-fg-00)',
    borderColor: 'transparent',
  },
  primaryPressed: {
    background: 'var(--semantic-bg-state-pressed-01)',
    color: 'var(--semantic-fg-00)',
    borderColor: 'transparent',
  },
  secondary: {
    background: 'var(--semantic-bg-00)',
    color: 'var(--semantic-fg-01)',
    borderColor: 'var(--semantic-border-02)',
  },
  secondaryPressed: {
    background: 'var(--semantic-bg-state-pressed-04)',
    color: 'var(--semantic-fg-01)',
    borderColor: 'var(--semantic-border-state-pressed-01)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--semantic-fg-emphasis)',
    borderColor: 'transparent',
  },
  ghostPressed: {
    background: 'var(--semantic-bg-state-pressed-05)',
    color: 'var(--semantic-fg-emphasis)',
    borderColor: 'transparent',
  },
};

export function Button({ children, variant = 'primary', disabled, loading, ...props }) {
  const [pressed, setPressed] = useState(false);
  const isDisabled = disabled || loading;
  const baseVariant = variants[variant] || variants.primary;
  const pressedVariant = variants[`${variant}Pressed`];
  const variantStyle = !isDisabled && pressed && pressedVariant ? pressedVariant : baseVariant;
  const style = { ...baseStyle, ...variantStyle };

  if (loading) {
    style.minWidth = 92;
    style.background = 'var(--semantic-bg-01)';
    style.color = 'var(--semantic-fg-00)';
    style.borderColor = 'transparent';
    style.cursor = 'not-allowed';
  } else if (disabled) {
    style.background = 'var(--semantic-bg-state-disabled-01)';
    style.color = 'var(--semantic-fg-state-disabled-01)';
    style.borderColor = 'var(--semantic-border-state-disabled-01)';
    style.cursor = 'not-allowed';
  }

  return (
    <button
      type="button"
      style={style}
      disabled={isDisabled}
      aria-busy={loading}
      onPointerDown={() => !isDisabled && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      {...props}
    >
      {loading ? <span className="ds-button-spinner" aria-hidden /> : children}
    </button>
  );
}
