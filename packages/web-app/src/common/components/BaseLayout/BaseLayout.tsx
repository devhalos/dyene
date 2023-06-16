import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from '../Header';

export type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Flex
      as='article'
      height='100vh'
      direction='column'
      // TODO: move color to theme config
      background='#F3F8F2'
      className='base-layout'
    >
      <Header />
      <Flex
        flex={1}
        overflow='hidden'
        className='container'
      >
        {children}
      </Flex>
    </Flex>
  );
}
