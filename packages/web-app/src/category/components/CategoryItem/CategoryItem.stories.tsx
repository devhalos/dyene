import { Meta, StoryObj } from '@storybook/react';
import animal from '../../../assets/sample-category.jpg';
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
    coverImage: animal,
    coverImageDesc: 'A wild cat',
    title: 'Animal',
  },
};
