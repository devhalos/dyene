import { Preview } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import defaultPreview from '../../../.storybook/preview';
import AppTheme from '../src/AppTheme';
import i18n from '../src/common/services/lang';

const preview: Preview = {
  ...defaultPreview,
  parameters: {
    ...defaultPreview.parameters,
    i18n,
  },
  decorators: [
    (Story) => (
      <AppTheme>
        <Story />
      </AppTheme>
    ),
  ],
};

export default preview;
