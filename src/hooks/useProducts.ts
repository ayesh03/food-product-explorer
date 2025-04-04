import { useQuery } from 'react-query';
import { fetchProductsByCategory } from '../utils/api';

export const useProducts = (category: string, page: number) => {
  return useQuery(['products', category, page], () => fetchProductsByCategory(category, page), {
    keepPreviousData: true,
  });
};