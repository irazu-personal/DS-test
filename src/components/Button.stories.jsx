import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'padded' },
};

export function Primary() {
  return <Button variant="primary">Primary</Button>;
}

export function Secondary() {
  return <Button variant="secondary">Secondary</Button>;
}

export function Ghost() {
  return <Button variant="ghost">Ghost</Button>;
}

export function Disabled() {
  return (
    <div style={{ display: 'flex', gap: 'var(--padding-03)' }}>
      <Button variant="primary" disabled>Primary disabled</Button>
      <Button variant="secondary" disabled>Secondary disabled</Button>
    </div>
  );
}

export function Spinner() {
  return <Button variant="primary" loading>Loading</Button>;
}

export function AllVariants() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--padding-04)' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
