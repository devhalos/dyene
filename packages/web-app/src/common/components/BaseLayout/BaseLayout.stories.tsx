import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const banner = within(canvas.getByRole('banner'));

    const menus = ['Preferences', 'Categories'];

    menus.forEach((menu) => {
      expect(
        banner.getByRole('button', {
          name: menu,
        }),
      ).toBeInTheDocument();
    });

    expect(canvas.getByText(args.children as string)).toBeInTheDocument();
  },
};
