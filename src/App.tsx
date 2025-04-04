import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Router>
        <div className="p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-4 p-2 bg-blue-500 text-white rounded"
          >
            Toggle Dark Mode
          </button>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:code" element={<ProductDetail />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
};

export default App;