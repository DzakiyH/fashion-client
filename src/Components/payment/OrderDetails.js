import React from 'react';

const OrderDetails = ({ product }) => {
  return (
    <div className='order-details'>
      <div className='product-detail'>
        <img
          src={product.product.image}
          alt='product'
          className='product-image'
        />
        <div className='product-name'>{product.title}</div>
      </div>
      <div className='quantity'>{product.quantity}</div>
      <div className='total'>{product.quantity * product.product.price}</div>
    </div>
  );
};

export default OrderDetails;
