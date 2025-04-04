import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  code: string;
  product_name: string;
  image_url: string;
  categories: string;
  ingredients_text?: string;
  nutrition_grades: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link to={`/product/${product.code}`} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
    <img
      src={product.image_url}
      alt={product.product_name}
      className="w-full h-32 object-cover rounded"
    />
    <h3 className="text-lg font-bold mt-2">{product.product_name}</h3>
    <p>Category: {product.categories}</p>
    <p>Ingredients: {product.ingredients_text || 'N/A'}</p>
    <p>Nutrition Grade: {product.nutrition_grades.toUpperCase()}</p>
  </Link>
);

export default ProductCard;