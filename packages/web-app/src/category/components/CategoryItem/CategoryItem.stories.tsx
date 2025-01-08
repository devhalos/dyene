import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import photoUrl from '../../../assets/sample-category.jpg';
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
    photoUrl,
    photoDesc: 'A wild cat',
    name: 'Animal',
  },
  play: async ({ canvasElement, args: { photoDesc, name } }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByRole('img', {
        name: photoDesc || '',
      }),
    ).toBeInTheDocument();

    expect(
      canvas.getByRole('heading', {
        name,
      }),
    ).toBeInTheDocument();
  },
};
