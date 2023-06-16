import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type AppThemeProps = {
  children: ReactNode;
};

const theme = extendTheme({
  styles: {
    global: {
      'html,body': {
        overflow: 'hidden',
      },
      body: {
        width: '100vw',
        height: '100vh',
      },
      '#root': {
        height: '100vh',
      },
    },
  },
});

export default function AppTheme({ children }: AppThemeProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
