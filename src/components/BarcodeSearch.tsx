import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductCard from './ProductCard';

const fetchProductByBarcode = async (barcode: string) => {
  const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
  if (response.data.status === 0) throw new Error('Product not found');
  return response.data.product;
};

const BarcodeSearch = () => {
  const [barcode, setBarcode] = useState('');
  const { data, error, refetch, isLoading } = useQuery(
    ['barcode', barcode],
    () => fetchProductByBarcode(barcode),
    { enabled: false }
  );

  const handleSearch = () => refetch();

  return (
    <div className="mb-4">
      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        placeholder="Enter barcode"
        className="p-2 border rounded dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {(error as Error).message}</p>}
      {data && <ProductCard product={data} />}
    </div>
  );
};

export default BarcodeSearch;