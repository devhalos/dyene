import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import HeaderComponent from './Header';

const meta: Meta<typeof HeaderComponent> = {
  title: 'Common/Header',
  tags: ['autodocs'],
  component: HeaderComponent,
};

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  },
};

export const ShowMenu: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    userEvent.click(menuButton);

    expect(await canvas.findByText('Categories')).toBeInTheDocument();
    expect(await canvas.findByText('Preferences')).toBeInTheDocument();
  },
};
