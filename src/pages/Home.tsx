import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import BarcodeSearch from '../components/BarcodeSearch';
import Filters from '../components/Filters';
import { useInView } from 'react-intersection-observer';

const SkeletonCard = () => (
  <div className="border p-4 rounded-lg animate-pulse">
    <div className="w-full h-32 bg-gray-300 dark:bg-gray-700" />
    <div className="h-4 bg-gray-300 dark:bg-gray-700 mt-2 w-3/4" />
    <div className="h-4 bg-gray-300 dark:bg-gray-700 mt-2 w-1/2" />
  </div>
);

const Home = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<{
    categories: string[];
    sugarMax: number | ''; // Align with Filters component
    sortBy: string;
  }>({ categories: ['snacks'], sugarMax: '', sortBy: '' });
  const { data, isLoading } = useProducts(filters.categories[0] || 'snacks', page);
  const { ref, inView } = useInView();

  if (inView && !isLoading) setPage((prev) => prev + 1);

  const filteredData = data
    ?.filter((p: any) => !filters.sugarMax || (p.nutriments?.['sugars_100g'] || 0) < filters.sugarMax)
    .sort((a: any, b: any) => {
      if (filters.sortBy === 'name-asc') return a.product_name.localeCompare(b.product_name);
      if (filters.sortBy === 'name-desc') return b.product_name.localeCompare(a.product_name);
      if (filters.sortBy === 'grade-asc') return a.nutrition_grades.localeCompare(b.nutrition_grades);
      if (filters.sortBy === 'calories-asc') return (a.nutriments?.energy || 0) - (b.nutriments?.energy || 0);
      return 0;
    });

  return (
    <div className="container mx-auto">
      <SearchBar />
      <BarcodeSearch />
      <Filters onFilter={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoading && !data ? (
          Array(6)
            .fill(0)
            .map((_, i) => <SkeletonCard key={i} />)
        ) : (
          filteredData?.map((product: any) => (
            <ProductCard key={product.code} product={product} />
          ))
        )}
      </div>
      <div ref={ref} className="h-10" />
    </div>
  );
};

export default Home;