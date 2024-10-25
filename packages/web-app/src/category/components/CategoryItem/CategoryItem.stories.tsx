import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import coverImage from '../../../assets/sample-category.jpg';
import CategoryItemComponent from './CategoryItem';

const meta: Meta<typeof CategoryItemComponent> = {
  title: 'Category/Category',
  tags: ['autodocs'],
  component: CategoryItemComponent,
};

export default meta;

type Story = StoryObj<typeof CategoryItemComponent>;

export const CategoryItem: Story = {
  args: {
    coverImage,
    coverImageDesc: 'A wild cat',
    title: 'Animal',
  },
  play: async ({ canvasElement, args: { coverImageDesc, title } }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByRole('img', {
        name: coverImageDesc,
      }),
    ).toBeInTheDocument();

    expect(
      canvas.getByRole('heading', {
        name: title,
      }),
    ).toBeInTheDocument();
  },
};
