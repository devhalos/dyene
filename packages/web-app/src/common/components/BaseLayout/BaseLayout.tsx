import { ReactNode } from 'react';
import { AppShell, Burger, Button, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo';

import styles from './BaseLayout.module.css';

export type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const { t } = useTranslation();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{
        height: 60,
      }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header className={styles.header}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom='sm'
            size='sm'
          />
          <Logo />
          <Title
            order={1}
            className={styles.title}
          >
            Dyene
          </Title>
        </Group>
        <Group visibleFrom='sm'>
          <Button variant='subtle'>{t('categories')}</Button>
          <Button variant='subtle'>{t('preferences')}</Button>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className={styles.navbar}>
        <Button variant='subtle'>{t('categories')}</Button>
        <Button variant='subtle'>{t('preferences')}</Button>
      </AppShell.Navbar>
      <AppShell.Main className={styles.main}>{children}</AppShell.Main>
    </AppShell>
  );
}
