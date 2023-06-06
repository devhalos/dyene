import { Center, Spacer, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import Logo from '../Logo';
import { AppBar, StyledMenuButton, Title } from './Header.styles';

export default function Header() {
  return (
    <AppBar>
      <Center>
        <Logo colorLetter='#eee' />
        <Title>Dyene</Title>
      </Center>
      <Spacer />
      <Menu>
        <StyledMenuButton>
          <FaEllipsisV />
        </StyledMenuButton>
        <MenuList>
          <MenuItem>Categories</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Menu>
    </AppBar>
  );
}
