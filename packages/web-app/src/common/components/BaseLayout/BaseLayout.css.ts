import { style } from '@vanilla-extract/css';
import { vars } from '../../../AppTheme';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
});

export const title = style({
  fontSize: '1rem',
  height: '1rem',
  fontVariant: 'small-caps',
});

export const navbar = style({
  padding: '1rem',
});

export const main = style({
  background: vars.colors.gray[2],
});
