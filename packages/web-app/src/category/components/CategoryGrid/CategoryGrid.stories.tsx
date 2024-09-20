import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import CategoryGridComponent from './CategoryGrid';

const meta: Meta<typeof CategoryGridComponent> = {
  title: 'Category/CategoryGrid',
  tags: ['autodocs'],
  component: CategoryGridComponent,
};

export default meta;

type Story = StoryObj<typeof CategoryGridComponent>;

export const CategoryGrid: Story = {
  args: {
    items: [...Array(8).keys()].map((i) => ({
      id: `animal-${i}`,
      title: `Animal ${i}`,
      coverImage: `animal-${i}.jpg`,
      coverImageDesc: 'A wild animal',
    })),
    onSelectCategory: (category) => window.alert(category.title),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    expect(buttons.length).not.toBe(0);

    jest.spyOn(window, 'alert').mockImplementation(() => null);

    await userEvent.click(buttons[0] as Element);

    expect(window.alert).toBeCalledWith('Animal 0');
  },
};
