import React from 'react';

const Order = ({ product }) => {
  return (
    <div className='order'>
      <div className='product-image'>
        <img src={product.product.image} alt='order' />
      </div>
      <span className='product-name'>{product.product.title}</span>
      <span className='quantity'>{product.quantity}</span>
    </div>
  );
};

export default Order;
