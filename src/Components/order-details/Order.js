import React from 'react';

const Order = () => {
  return (
    <div className='order'>
      <div className='product-image'>
        <img src='/images/men_clothes.jpg' alt='order' />
      </div>
      <span className='product-name'>product name</span>
      <span className='status-delivery'>arrived at somewhere</span>
    </div>
  );
};

export default Order;
