import {
  Button,
  Flex,
  Heading,
  MenuButton,
  FlexProps,
  HeadingProps,
  MenuButtonProps,
} from '@chakra-ui/react';

export const AppBar = (props: FlexProps) => (
  <Flex
    bg='linear-gradient(90.13deg, #0000B8 -0.53%, #7A0E6C 76.44%, #ED1B24 100%);'
    padding='0.5rem 1rem'
    {...props}
  />
);

export const Title = (props: HeadingProps) => (
  <Heading
    as='h1'
    size='md'
    fontWeight={500}
    marginLeft='0.5rem'
    color='white'
    {...props}
  />
);

export const StyledMenuButton = (props: MenuButtonProps) => {
  const hoverProps: MenuButtonProps = { bg: 'blackAlpha.500' };

  return (
    <MenuButton
      as={Button}
      variant='ghost'
      color='white'
      _hover={hoverProps}
      _active={hoverProps}
      {...props}
    />
  );
};
