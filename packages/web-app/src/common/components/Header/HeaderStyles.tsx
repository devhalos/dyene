import {
  Button,
  Flex,
  Heading,
  MenuButton as ChakraMenuButton,
  FlexProps,
  HeadingProps,
  MenuButtonProps,
} from '@chakra-ui/react';

export const AppBar = (props: FlexProps) => (
  <Flex
    justifyContent='space-between'
    bg='linear-gradient(90.13deg, #0000B8 -0.53%, #7A0E6C 76.44%, #ED1B24 100%);'
    padding='0.5rem 1rem'
    {...props}
  />
);

export const Title = (props: HeadingProps) => (
  <Heading
    as='h1'
    size='md'
    marginLeft='0.5rem'
    color='white'
    fontWeight='medium'
    {...props}
  />
);

export const MenuButton = (props: MenuButtonProps) => {
  const hoverProps: MenuButtonProps = { bg: 'blackAlpha.500' };

  return (
    <ChakraMenuButton
      as={Button}
      aria-label='navigation menu'
      variant='ghost'
      color='white'
      _hover={hoverProps}
      _active={hoverProps}
      {...props}
    />
  );
};
