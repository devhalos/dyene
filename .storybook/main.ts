const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-react-i18next',
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
};

export default config;
