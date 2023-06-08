import { Center, Spacer, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import { AppBar, MenuButton, Title } from './Header.styles';

export default function Header() {
  return (
    <AppBar>
      <Center>
        <Logo colorLetter='#eee' />
        <Title>Dyene</Title>
      </Center>
      <Spacer />
      <Menu>
        <MenuButton>
          <FaEllipsisV />
        </MenuButton>
        <MenuList>
          <MenuItem>Categories</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Menu>
    </AppBar>
  );
}
