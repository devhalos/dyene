import { style } from '@vanilla-extract/css';
import { vars } from '../../../AppTheme';

export const container = style({
  padding: '1rem',
});

export const header = style({
  padding: '1rem',
});

export const title = style({
  fontWeight: 500,
  margin: '2rem',

  '@media': {
    [vars.largerThan('xs')]: {
      margin: 0,
    },
    [vars.largerThan('sm')]: {
      margin: '1rem',
    },
  },
});
