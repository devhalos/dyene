import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import coverImage from '../../../assets/sample-category.jpg';
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
      coverImage,
      coverImageDesc: `A wild animal ${i}`,
    })),
    onSelectCategory: (category) => window.alert(category.title),
  },
  play: async ({ canvasElement, args: { items } }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    expect(buttons.length).toBe(items.length);

    jest.spyOn(window, 'alert').mockImplementation(() => null);

    for (const { title, coverImageDesc } of items) {
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

      await userEvent.click(
        canvas.getByRole('button', {
          name: new RegExp(title),
        }),
      );

      expect(window.alert).toBeCalledWith(title);
    }
  },
};
