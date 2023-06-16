import { Meta, StoryObj } from '@storybook/react';
import animal from '../../../assets/sample-category.jpg';
import CategoryComponent from './Category';

const meta: Meta<typeof CategoryComponent> = {
  title: 'Category/Category',
  tags: ['autodocs'],
  component: CategoryComponent,
};

export default meta;

type Story = StoryObj<typeof CategoryComponent>;

export const Category: Story = {
  args: {
    coverImage: animal,
    coverImageDesc: 'A wild cat',
    title: 'Animal',
  },
};
