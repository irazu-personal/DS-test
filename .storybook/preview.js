import '../src/design-tokens.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: { matchers: /^backgroundColor|color$/ },
  },
};

export default preview;
