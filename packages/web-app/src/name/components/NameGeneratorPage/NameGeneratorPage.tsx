import { BaseLayout, useStore } from '../../../common';

export default function NameGeneratorPage() {
  const category = useStore((state) => state.selectedCategory);

  if (!category) {
    return <p>TODO: handle no category</p>;
  }

  return (
    <BaseLayout>
      <h2>{category.name}</h2>
    </BaseLayout>
  );
}
