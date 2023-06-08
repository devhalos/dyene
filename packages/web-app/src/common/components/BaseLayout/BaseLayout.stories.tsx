import { Meta, StoryObj } from '@storybook/react';
import AppTheme from '../../../AppTheme';
import BaseLayout from './BaseLayout';

const meta: Meta<typeof BaseLayout> = {
  title: 'BaseLayout',
  component: BaseLayout,
};

export default meta;

type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
  render: () => (
    <AppTheme>
      <BaseLayout>
        <p>Content</p>
      </BaseLayout>
    </AppTheme>
  ),
};
