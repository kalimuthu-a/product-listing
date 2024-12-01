import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ product = {} }) => {
  return (
    <div className="product-card">
      <div className="prod-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="prod-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ProductCard;
