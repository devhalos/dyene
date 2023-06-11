import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import animal from '../../../assets/animals-sm.jpg';
import CategoryListComponent from './CategoryList';

const meta: Meta<typeof CategoryListComponent> = {
  title: 'Category/CategoryList',
  tags: ['autodocs'],
  component: CategoryListComponent,
};

export default meta;

type Story = StoryObj<typeof CategoryListComponent>;

export const Category: Story = {
  args: {
    items: [...Array(8).keys()].map((i) => ({
      title: `Animal ${i}`,
      coverImage: animal,
      coverImageDesc: 'A wild animal',
    })),
    onClick: (category) => alert(category.title),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    expect(buttons.length).not.toBe(0);

    jest.spyOn(window, 'alert').mockImplementation(() => null);

    userEvent.click(buttons[0] as Element);

    expect(window.alert).toBeCalledWith('Animal 0');
  },
};
