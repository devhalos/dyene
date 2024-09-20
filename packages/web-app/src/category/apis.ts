import { httpClient } from '../common';

export const getCategories = async () => {
  const { data } = await httpClient.get('/categories.json');

  return data;
};
