import React from 'react';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import ProductCard from './ProductCard';

const SearchBar = () => {
  const { query, setQuery, data, isLoading } = useDebouncedSearch('');

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products by name..."
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {data?.map((product: any) => (
            <ProductCard key={product.code} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;