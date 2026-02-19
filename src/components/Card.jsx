import React from 'react';

const cardStyle = {
  background: 'var(--semantic-bg-00)',
  borderRadius: 'var(--corner-radius-05)',
  padding: 'var(--padding-07)',
  boxShadow: 'var(--soft-level-1)',
  border: '1px solid var(--semantic-border-04)',
  maxWidth: 320,
};

const titleStyle = {
  fontFamily: 'var(--font-families-sf-hebrew)',
  fontSize: 'var(--font-size-3)',
  fontWeight: 600,
  lineHeight: 'var(--line-heights-3)',
  color: 'var(--semantic-fg-01)',
  margin: '0 0 var(--spacing-03) 0',
};

const bodyStyle = {
  fontFamily: 'var(--font-families-sf-hebrew)',
  fontSize: 'var(--font-size-2)',
  fontWeight: 400,
  lineHeight: 'var(--line-heights-3)',
  color: 'var(--semantic-fg-02)',
  margin: 0,
};

export function Card({ title, children, ...props }) {
  return (
    <div style={cardStyle} {...props}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      {children && <p style={bodyStyle}>{children}</p>}
    </div>
  );
}
