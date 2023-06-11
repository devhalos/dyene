import { SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import Category, { CategoryProps } from '../Category';

export type CategoryListProps = {
  items: CategoryProps[];
  onClick: (
    category: CategoryProps,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
};

export default function CategoryList({ items, onClick }: CategoryListProps) {
  return (
    <SimpleGrid
      columns={4}
      spacing={10}
      minChildWidth={200}
    >
      {items.map((item) => (
        <motion.button
          key={item.title}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          onClick={(e) => onClick(item, e)}
        >
          <Category {...item} />
        </motion.button>
      ))}
    </SimpleGrid>
  );
}
