import { ReactNode } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

import '@mantine/core/styles.layer.css';

export const theme = createTheme({});
export const vars = themeToVars(theme);

export type AppThemeProps = {
  children: ReactNode;
};

export default function AppTheme({ children }: AppThemeProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
