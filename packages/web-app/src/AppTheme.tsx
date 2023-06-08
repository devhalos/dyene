import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type AppThemeProps = {
  children: ReactNode;
};

export default function AppTheme({ children }: AppThemeProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
