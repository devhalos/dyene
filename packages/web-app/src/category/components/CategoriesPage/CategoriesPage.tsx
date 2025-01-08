import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Center, Stack, Title } from '@mantine/core';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { BaseLayout, Category, useStore } from '../../../common';
import { getCategories } from '../../apis';
import CategoryGrid from '../CategoryGrid';
import { queryKey } from '../../constants';
import { CategoryItemProps } from '../CategoryItem';
import * as styles from './CategoriesPage.css';

export default function CategoriesPage() {
  const { t } = useTranslation();
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  const { isLoading, data: categories } = useQuery<Category[]>({
    queryKey: [queryKey.CATEGORIES],
    queryFn: getCategories,
    initialData: [],
  });

  const navigate = useNavigate();
  const handleSelectCategory = (
    category: CategoryItemProps,
    e: React.MouseEvent<HTMLElement>,
  ) => {
    setSelectedCategory(category);
    navigate({
      pathname: '/name/generate',
      search: createSearchParams({
        categoryId: category.id,
      }).toString(),
    });
    e.preventDefault();
  };

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
            onSelectCategory={handleSelectCategory}
          />
        )}
      </Stack>
    </BaseLayout>
  );
}
