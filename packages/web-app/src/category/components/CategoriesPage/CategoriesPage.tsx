import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Center, Stack, Title } from '@mantine/core';
import { BaseLayout } from '../../../common';
import { getCategories } from '../../apis';
import { Category } from '../../types';
import CategoryGrid from '../CategoryGrid';
import { CategoryItemProps } from '../CategoryItem/CategoryItem';
import { queryKey } from '../../constants';
import * as styles from './CategoriesPage.css';

export default function CategoriesPage() {
  const { t } = useTranslation();
  const { isLoading, data: categories } = useQuery<
    Category[],
    Error,
    (CategoryItemProps & { id: string })[]
  >({
    queryKey: [queryKey.CATEGORIES],
    queryFn: getCategories,
    select: (data) =>
      data.map(({ id, name, photoDesc, photoUrl }) => ({
        id,
        title: name,
        coverImage: photoUrl,
        coverImageDesc: photoDesc || '',
      })),
    initialData: [],
  });

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
