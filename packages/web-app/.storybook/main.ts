import type { StorybookConfig } from '@storybook/react-vite';
import defaultConfig from '../../../.storybook/main';

const config: StorybookConfig = {
  ...(defaultConfig as StorybookConfig),
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
