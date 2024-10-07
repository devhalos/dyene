import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { appQueryDecorator } from '../../../../.storybook/decorators';
import CategoriesPageComponent from './CategoriesPage';

const meta: Meta<typeof CategoriesPageComponent> = {
  title: 'Category/CategoriesPage',
  tags: ['autodocs'],
  component: CategoriesPageComponent,
};

export default meta;

type Story = StoryObj<typeof CategoriesPageComponent>;

export const CategoriesPage: Story = {
  decorators: [appQueryDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText('Dyene')).toBeInTheDocument();
    expect(canvas.getByText('Choose a Category')).toBeInTheDocument();

    const expectedCategories = [
      'Dyene',
      'Animals',
      'Astronomy',
      'Cars',
      'Elements',
      'Movies',
      'Mythology',
      'Places',
      'Plants',
      'Super Hero',
      'Video Game',
    ];

    for (const category of expectedCategories) {
      expect(await canvas.findByText(category)).toBeInTheDocument();
    }
  },
};
