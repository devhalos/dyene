import { Box, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import Category, { CategoryProps } from '../Category';

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export type CategoryListItemProps = CategoryProps & {
  id: string;
};

export type CategoryListProps = {
  items: CategoryListItemProps[];
  onSelectCategory: (category: CategoryProps, event: ButtonEvent) => void;
};

export default function CategoryList({
  items,
  onSelectCategory,
}: CategoryListProps) {
  return (
    <SimpleGrid
      spacing={10}
      minChildWidth={240}
    >
      {items.map((item) => (
        <Box
          as={motion.button}
          key={item.id}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          onClick={(e: ButtonEvent) => onSelectCategory(item, e)}
        >
          <Category {...item} />
        </Box>
      ))}
    </SimpleGrid>
  );
}
