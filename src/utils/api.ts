import axios from 'axios';

const BASE_URL = 'https://world.openfoodfacts.org';

export const fetchProductsByCategory = async (category: string, page: number) => {
  const response = await axios.get(`${BASE_URL}/category/${category}.json?page=${page}`);
  return response.data.products;
};