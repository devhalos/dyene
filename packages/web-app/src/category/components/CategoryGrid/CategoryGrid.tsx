import React from 'react';
import { Container, SimpleGrid, UnstyledButton } from '@mantine/core';
import { motion } from 'framer-motion';
import CategoryItem, { CategoryProps } from '../CategoryItem';
import * as styles from './CategoryGrid.css';

export type CategoryGridItemProps = CategoryProps & {
  id: string;
};

export type CategoryGridProps = {
  items: CategoryGridItemProps[];
  onSelectCategory: (
    category: CategoryProps,
    event: React.MouseEvent<HTMLElement>,
  ) => void;
};

export default function CategoryGrid({
  items,
  onSelectCategory,
}: CategoryGridProps) {
  return (
    <Container className={styles.container}>
      <SimpleGrid
        cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5 }}
        spacing={{
          base: 20,
          sm: 30,
        }}
      >
        {items.map((item) => (
          <UnstyledButton
            key={item.id}
            renderRoot={(props) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                {...props}
              />
            )}
            className={styles.category}
            onClick={(e) => onSelectCategory(item, e)}
          >
            <CategoryItem {...item} />
          </UnstyledButton>
        ))}
      </SimpleGrid>
    </Container>
  );
}
