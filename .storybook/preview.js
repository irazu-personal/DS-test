import '../src/design-tokens.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: { matchers: /^backgroundColor|color$/ },
    options: {
      storySort: {
        order: ['Foundations', 'Components'],
      },
    },
  },
};

export default preview;
