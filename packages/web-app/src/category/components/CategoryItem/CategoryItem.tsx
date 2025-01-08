import { Card, Image, Title } from '@mantine/core';
import { Category } from '../../../common';
import * as styles from './CategoryItem.css';

export type CategoryItemProps = Category;

export default function CategoryItem({
  name,
  photoUrl,
  photoDesc,
}: CategoryItemProps) {
  return (
    <Card shadow='sm'>
      <Card.Section>
        <Image
          className={styles.coverPicture}
          src={photoUrl}
          alt={photoDesc}
        />
      </Card.Section>
      <Card.Section>
        <Title
          order={3}
          size='h5'
          className={styles.title}
        >
          {name}
        </Title>
      </Card.Section>
    </Card>
  );
}
