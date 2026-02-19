# DS-test

Design system with **Figma tokens** (Tokens Studio export + text-styles) and **Storybook**.

## Live Storybook

Once GitHub Pages is enabled, Storybook is published at:

**https://irazu-personal.github.io/DS-test/**

## Run locally

```bash
npm install --legacy-peer-deps
npm run build:tokens   # regenerate CSS from tokens
npm run storybook      # open at http://localhost:6006
```

If `npm run storybook` fails (e.g. `uv_interface_addresses` or "Unknown system error"), preview the built Storybook instead:

```bash
npm run build-storybook
npm run preview:serve  # serves storybook-static on http://localhost:6006
```

Then open **http://localhost:6006** in your browser. (Uses Python’s built-in HTTP server; no Node dev server needed.)

## Token sources

- `tokens-colors/` — Global and Semantic colors  
- `tokens-shadows-font-spacing-corner-radius/` — spacing, padding, corner-radius, shadows, fonts  
- `text-styles.json` — typography (Title, Body)

See `tokens/README.md` for details.
