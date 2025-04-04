import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const searchProducts = async (query: string) => {
  const response = await axios.get(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`
  );
  return response.data.products;
};

export const useDebouncedSearch = (initialQuery: string) => {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  const { data, isLoading } = useQuery(['search', debouncedQuery], () => searchProducts(debouncedQuery), {
    enabled: !!debouncedQuery,
  });

  return { data, isLoading, query, setQuery };
};