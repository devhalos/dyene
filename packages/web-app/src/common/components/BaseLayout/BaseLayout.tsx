import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from '../Header';

export type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Flex
      flexDirection='column'
      height='100vh'
      overflow='hidden'
    >
      <Header />
      <Box
        flex='1'
        overflow='auto'
      >
        {children}
      </Box>
    </Flex>
  );
}
