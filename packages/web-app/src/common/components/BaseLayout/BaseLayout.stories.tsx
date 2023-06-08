import { Meta, StoryObj } from '@storybook/react';
import BaseLayoutComponent from './BaseLayout';

const meta: Meta<typeof BaseLayoutComponent> = {
  title: 'Common/BaseLayout',
  tags: ['autodocs'],
  component: BaseLayoutComponent,
};

export default meta;

type Story = StoryObj<typeof BaseLayoutComponent>;

export const BaseLayout: Story = {
  args: {
    children: 'Content',
  },
};
