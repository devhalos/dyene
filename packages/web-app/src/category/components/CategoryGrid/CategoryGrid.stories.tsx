import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import photoUrl from '../../../assets/sample-category.jpg';
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
      name: `Animal ${i}`,
      photoUrl,
      photoDesc: `A wild animal ${i}`,
    })),
    onSelectCategory: (category) => window.alert(category.name),
  },
  play: async ({ canvasElement, args: { items } }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    expect(buttons.length).toBe(items.length);

    jest.spyOn(window, 'alert').mockImplementation(() => null);

    for (const { name, photoDesc } of items) {
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

      await userEvent.click(
        canvas.getByRole('button', {
          name: new RegExp(name),
        }),
      );

      expect(window.alert).toBeCalledWith(name);
    }
  },
};
