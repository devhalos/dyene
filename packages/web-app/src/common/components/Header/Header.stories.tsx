import { Meta, StoryObj } from '@storybook/react';
import HeaderComponent from './Header';

const meta: Meta<typeof HeaderComponent> = {
  title: 'Common/Header',
  tags: ['autodocs'],
  component: HeaderComponent,
};

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {};
