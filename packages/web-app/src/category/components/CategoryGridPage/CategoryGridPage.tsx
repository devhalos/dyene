import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Stack, Title } from '@mantine/core';
import { BaseLayout } from '../../../common';
import useGetCategories from '../../useGetCategories';
import CategoryGrid, { CategoryGridProps } from '../CategoryGrid';

import * as styles from './CategoryGridPage.css';

export default function CategoryGridPage() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<CategoryGridProps['items']>([]);
  const { isLoading, data } = useGetCategories();

  useEffect(() => {
    const items = data || [];

    setCategories(
      items.map(({ id, name, photoDesc, photoUrl }) => ({
        id,
        title: name,
        coverImage: photoUrl,
        coverImageDesc: photoDesc || '',
      })),
    );
  }, [isLoading, data]);

  return (
    <BaseLayout>
      <Stack
        component='section'
        className={styles.container}
      >
        <Center
          component='header'
          className={styles.header}
        >
          <Title
            className={styles.title}
            order={2}
          >
            {t('categoryGrid.title')}
          </Title>
        </Center>
        {!isLoading && (
          <CategoryGrid
            items={categories}
            onSelectCategory={(category) => console.log(category)}
          />
        )}
      </Stack>
    </BaseLayout>
  );
}
