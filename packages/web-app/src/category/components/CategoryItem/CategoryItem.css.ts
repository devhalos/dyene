import { style } from '@vanilla-extract/css';

export const coverPicture = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

export const title = style({
  padding: '1rem',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '1rem',
  fontVariant: 'small-caps',
  background: '#fff',
});
