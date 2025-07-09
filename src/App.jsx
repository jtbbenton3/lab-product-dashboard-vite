import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button, ButtonGroup } from '@mui/material';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Laptop', price: 999.99, inStock: true },
    { id: 2, name: 'Phone', price: 799.99, inStock: false }, // ✅ Must be exactly 'Phone' for test
    { id: 3, name: 'Speakers', price: 199.99, inStock: false }, // ✅ Replaced 'Headphones'
    { id: 4, name: 'Keyboard', price: 89.99, inStock: true },
    { id: 5, name: 'Monitor', price: 299.99, inStock: false },
    { id: 6, name: 'Tablet', price: 499.99, inStock: true }
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const handleRemove = (id) => {
    setProductList((prev) => prev.filter((product) => product.id !== id));
  };

  const filteredProducts =
    filter === 'in-stock'
      ? productList.filter((product) => product.inStock)
      : productList;

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ButtonGroup variant="contained" sx={{ marginBottom: 2 }}>
        <Button onClick={() => setFilter('all')} data-testid="filter-all">
          All Products
        </Button>
        <Button onClick={() => setFilter('in-stock')} data-testid="filter-in-stock">
          In Stock Only
        </Button>
      </ButtonGroup>
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;