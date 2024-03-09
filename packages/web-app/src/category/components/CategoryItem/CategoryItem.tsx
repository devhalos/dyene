import { Card, Image, Title } from '@mantine/core';

import styles from './CategoryItem.module.css';

export type CategoryItemProps = {
  coverImage: string;
  coverImageDesc: string;
  title: string;
};

export default function CategoryItem({
  coverImage,
  coverImageDesc,
  title,
}: CategoryItemProps) {
  return (
    <Card
      shadow='sm'
      className={styles.category}
    >
      <Card.Section>
        <Image
          className={styles['cover-picture']}
          src={coverImage}
          alt={coverImageDesc}
        />
      </Card.Section>
      <Card.Section>
        <Title
          order={3}
          size='h5'
          className={styles.title}
        >
          {title}
        </Title>
      </Card.Section>
    </Card>
  );
}
