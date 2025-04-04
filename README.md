# Food Product Explorer

A web application built to explore food products using the OpenFoodFacts API.

## Overview
This project is a scalable and performant React application that allows users to search, filter, and view detailed information about food products. It includes features like infinite scroll, debounced search, barcode lookup, and advanced filtering/sorting.

## Features
- **Homepage**: Displays a list of products with infinite scroll and skeleton loaders.
- **Search**: Debounced search by product name using the OpenFoodFacts API.
- **Barcode Search**: Lookup products by barcode with error handling.
- **Filters & Sorting**: Multi-category filtering, sugar range filter, and sorting by name, nutrition grade, or calories.
- **Product Details**: Detailed view of each product with ingredients, nutrition, and labels.
- **UI/UX**: Responsive design with dark mode support using TailwindCSS.
- **Performance**: Optimized with React Query for API caching and lazy loading.

## Tech Stack
- **Frontend**: React, TypeScript
- **State Management**: React Query
- **Styling**: TailwindCSS
- **Routing**: React Router
- **API**: OpenFoodFacts API

## Method Used
1. **Setup**: Initialized a React project with TypeScript and installed dependencies (React Query, TailwindCSS, etc.).
2. **API Integration**: Used `axios` to fetch data from OpenFoodFacts API endpoints for categories, search, and barcode lookup.
3. **Components**: Built reusable components (`ProductCard`, `SearchBar`, `Filters`) with a component-based architecture.
4. **State Management**: Implemented React Query for efficient API handling and caching.
5. **UI**: Designed a responsive layout with TailwindCSS and added dark mode via a toggle.
6. **Performance**: Added infinite scroll with `react-intersection-observer` and debounced search to reduce API calls.
7. **Deployment Prep**: Structured the project for easy deployment (e.g., Vercel) with a clean Git history.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/food-product-explorer.git
