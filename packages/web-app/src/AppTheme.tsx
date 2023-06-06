import { ChakraProvider } from '@chakra-ui/react';

export type AppThemeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

export default function AppTheme({ children }: AppThemeProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
