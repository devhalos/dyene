import { useEffect, useState } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BaseLayout } from '../../../common';
import useGetCategories from '../../useGetCategories';
import CategoryList, { CategoryListItemProps } from '../CategoryList';

export default function CategoryListPage() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<CategoryListItemProps[]>([]);
  const [isChangeTitle, setIsChangeTitle] = useState(false);
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

  const title =
    (isChangeTitle && t('categoryList.hoverTitle')) || t('categoryList.title');

  return (
    <BaseLayout>
      <Box
        as='section'
        padding={[6, 8, 12, 20]}
        flex={1}
        overflow='auto'
        onMouseEnter={() => setIsChangeTitle(true)}
        onMouseLeave={() => setIsChangeTitle(false)}
      >
        <Center
          as='header'
          marginBottom={[6, 10]}
        >
          <Heading fontWeight='medium'>{title}</Heading>
        </Center>
        {!isLoading && (
          <CategoryList
            items={categories}
            onSelectCategory={(category) => console.log(category)}
          />
        )}
      </Box>
    </BaseLayout>
  );
}
