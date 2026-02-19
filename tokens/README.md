# Design tokens (from Figma)

Tokens are read from the **Tokens Studio export** and **text-styles.json** in the project root.

**Sources (used by `npm run build:tokens`):**

- `tokens-colors/` — Global and Semantic colors
- `tokens-shadows-font-spacing-corner-radius/` — spacing, padding, corner-radius, shadows, font primitives
- `text-styles.json` — typography (Title, Body md/sm/xs) with resolved font-family, font-size, font-weight, line-height, letter-spacing

**To regenerate CSS after updating tokens:**

```bash
npm run build:tokens
```

This generates **`src/design-tokens.css`** (CSS custom properties) for Storybook and the app.
