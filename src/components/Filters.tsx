import React, { useState } from 'react';

interface FiltersProps {
  onFilter: (filters: { categories: string[]; sugarMax: number | ''; sortBy: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [sugarMax, setSugarMax] = useState<number | ''>('');
  const [sortBy, setSortBy] = useState('');

  const handleApply = () => {
    onFilter({ categories, sugarMax, sortBy });
  };

  return (
    <div className="p-4 border rounded mb-4 dark:border-gray-700">
      <h3 className="text-lg font-bold">Filters</h3>
      <div>
        <label>Categories:</label>
        {['beverages', 'dairy', 'snacks'].map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              checked={categories.includes(cat)}
              onChange={() => {
                setCategories((prev) =>
                  prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
                );
              }}
            />
            {cat}
          </label>
        ))}
      </div>
      <div>
        <label>Max Sugar (g):</label>
        <input
          type="number"
          value={sugarMax}
          onChange={(e) => setSugarMax(e.target.valueAsNumber || '')}
          className="p-1 border rounded dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div>
        <label>Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-1 border rounded dark:bg-gray-800 dark:text-white"
        >
          <option value="">None</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="grade-asc">Nutrition Grade (A-E)</option>
          <option value="calories-asc">Calories (Low-High)</option>
        </select>
      </div>
      <button onClick={handleApply} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Apply
      </button>
    </div>
  );
};

export default Filters;