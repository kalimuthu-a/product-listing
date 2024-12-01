// src/components/ProductListContainer.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import productService from '../../services/productService';

const ProductListContainer = ({config}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService?.getProducts(config);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductList
      products={products}
      loading={loading}
      error={error}
    />
  );
};
ProductListContainer.propTypes = {
  config: PropTypes.object,
};

export default ProductListContainer;
