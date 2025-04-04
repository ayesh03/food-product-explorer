import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProduct = async (code: string) => {
  const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
  if (response.data.status === 0) throw new Error('Product not found');
  return response.data.product;
};

const ProductDetail = () => {
  const { code } = useParams<{ code: string }>();
  const { data, isLoading, error } = useQuery(['product', code], () => fetchProduct(code!));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {(error as Error).message}</p>;

  return (
    <div className="p-4">
      <img src={data.image_url} alt={data.product_name} className="w-64 rounded" />
      <h1 className="text-2xl font-bold mt-2">{data.product_name}</h1>
      <p>Ingredients: {data.ingredients_text || 'N/A'}</p>
      <p>
        Nutrition: Fat {data.nutriments?.fat_100g || 0}g, Carbs {data.nutriments?.carbohydrates_100g || 0}g, Proteins{' '}
        {data.nutriments?.proteins_100g || 0}g
      </p>
      <p>Labels: {data.labels || 'None'}</p>
    </div>
  );
};

export default ProductDetail;