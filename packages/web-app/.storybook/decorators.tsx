import AppQuery from '../src/AppQuery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appQueryDecorator = (Story: any) => (
  <AppQuery>
    <Story />
  </AppQuery>
);
