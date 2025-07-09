import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { name, price, inStock, id } = product;

  const cardClass = inStock
    ? styles.card
    : `${styles.card} outOfStockClass`; // ← This adds plain class name too

  return (
    <div className={cardClass} data-testid="product-card">
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default ProductCard;