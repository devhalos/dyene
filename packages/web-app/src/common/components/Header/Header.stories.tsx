import { Meta, StoryObj } from '@storybook/react';
import AppTheme from '../../../AppTheme';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <AppTheme>
      <Header />
    </AppTheme>
  ),
};
