import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { appQueryDecorator } from '../../../../.storybook/decorators';
import CategoryListPageComponent from './CategoryListPage';

const meta: Meta<typeof CategoryListPageComponent> = {
  title: 'Category/CategoryListPage',
  tags: ['autodocs'],
  component: CategoryListPageComponent,
};

export default meta;

type Story = StoryObj<typeof CategoryListPageComponent>;

export const CategoryListPage: Story = {
  decorators: [appQueryDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText('Dyene')).toBeInTheDocument();
    expect(canvas.getByText('Generate Sprint Name')).toBeInTheDocument();

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
