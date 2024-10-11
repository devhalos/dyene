import { Meta, StoryObj } from '@storybook/react';
import { InputType } from '@storybook/csf';
import LogoComponent from './Logo';

const colorArgType: InputType = {
  control: 'color',
};

const meta: Meta<typeof LogoComponent> = {
  title: 'Common/Logo',
  tags: ['autodocs'],
  component: LogoComponent,
  argTypes: {
    colorLightning: colorArgType,
    colorLetter: colorArgType,
  },
};

export default meta;

type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {};
