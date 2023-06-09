import { Preview } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import defaultPreview from '../../../.storybook/preview';
import AppTheme from '../src/AppTheme';

const preview: Preview = {
  ...defaultPreview,
  decorators: [
    (Story) => (
      <AppTheme>
        <Story />
      </AppTheme>
    ),
  ],
};

export default preview;
