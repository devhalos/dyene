import { ReactNode } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.layer.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export type AppThemeProps = {
  children: ReactNode;
};

export default function AppTheme({ children }: AppThemeProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
