module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    "storybook-addon-react-router-v6"
  ],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true,
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
};
