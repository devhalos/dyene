import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

export type CategoryProps = {
  coverImage: string;
  coverImageDesc: string;
  title: string;
};

export default function Category({
  coverImage,
  coverImageDesc,
  title,
}: CategoryProps) {
  return (
    <Card>
      <Image
        src={coverImage}
        alt={coverImageDesc}
        objectFit='cover'
        rounded='md'
        borderBottomRadius={0}
        height={200}
      />
      <CardBody>
        <Heading
          as='h3'
          textAlign='center'
          fontSize='lg'
          fontWeight='medium'
        >
          {title}
        </Heading>
      </CardBody>
    </Card>
  );
}
