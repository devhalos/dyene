import { Center, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import { AppBar, MenuButton, Title } from './HeaderStyles';

export default function Header() {
  const { t } = useTranslation();

  return (
    <AppBar as='section'>
      <Center as='header'>
        <Logo colorLetter='#eee' />
        <Title>Dyene</Title>
      </Center>
      <Menu>
        <MenuButton>
          <FaEllipsisV />
        </MenuButton>
        <MenuList>
          <MenuItem>{t('categories')}</MenuItem>
          <MenuItem>{t('preferences')}</MenuItem>
        </MenuList>
      </Menu>
    </AppBar>
  );
}
