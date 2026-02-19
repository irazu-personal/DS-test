import '../src/design-tokens.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: { matchers: /^backgroundColor|color$/ },
    options: {
      storySort: (a, b) => {
        const aTitle = (a.title || '').toLowerCase();
        const bTitle = (b.title || '').toLowerCase();
        if (aTitle.startsWith('1-foundations') && bTitle.startsWith('2-components')) return -1;
        if (aTitle.startsWith('2-components') && bTitle.startsWith('1-foundations')) return 1;
        return (a.title || '').localeCompare(b.title || '', undefined, { numeric: true });
      },
    },
  },
};

export default preview;
