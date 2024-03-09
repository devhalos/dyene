import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { appQueryDecorator } from '../../../../.storybook/decorators';
import CategoryGridPageComponent from './CategoryGridPage';

const meta: Meta<typeof CategoryGridPageComponent> = {
  title: 'Category/CategoryGridPage',
  tags: ['autodocs'],
  component: CategoryGridPageComponent,
};

export default meta;

type Story = StoryObj<typeof CategoryGridPageComponent>;

export const CategoryGridPage: Story = {
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
