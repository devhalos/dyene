import { useQuery } from 'react-query';
import { httpClient } from '../common';
import { Category } from './CategoryType';

const getCategories = () => {
  // TODO: move path to config
  return httpClient.get('/categories.json').then(({ data }) => data);
};

export default function useGetCategories() {
  return useQuery<Category[], Error>('categories', getCategories);
}
