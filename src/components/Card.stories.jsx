import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'padded' },
};

export function Default() {
  return (
    <Card title="Card title">
      This card uses design tokens for background, border radius, padding, shadow, and typography.
    </Card>
  );
}

export function WithAction() {
  return (
    <Card title="With action">
      You can put any content inside. Here is a button using the same tokens.
      <div style={{ marginTop: 'var(--spacing-04)' }}>
        <Button variant="primary">Action</Button>
      </div>
    </Card>
  );
}

export function Stacked() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-05)' }}>
      <Card title="First">First card in a row.</Card>
      <Card title="Second">Second card.</Card>
      <Card title="Third">Third card.</Card>
    </div>
  );
}
