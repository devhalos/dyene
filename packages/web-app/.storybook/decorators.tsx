import AppQuery from '../src/AppQuery';

export const appQueryDecorator = (Story: JSX.ElementType) => (
  <AppQuery>
    <Story />
  </AppQuery>
);
