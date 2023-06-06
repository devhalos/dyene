import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo />,
};

export const Light: Story = {
  render: () => <Logo colorLetter='#eee' />,
};

export const CustomSize: Story = {
  render: () => (
    <Logo
      width={128}
      height={128}
    />
  ),
};
