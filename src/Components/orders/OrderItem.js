import React from 'react';

const OrderItem = () => {
  return (
    <div className='order-item'>
      <div className='order'>
        <img src='/images/men_clothes.jpg' alt='order-item' />
        <h5 className='order-name'>Product Name</h5>
      </div>
      <p className='status'>on delivery</p>
      <p className='action'>details</p>
    </div>
  );
};

export default OrderItem;
