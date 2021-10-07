import React from 'react';
import LeftSide from '../../Components/product/LeftSide';
import RightSide from '../../Components/product/RightSide';
import './index.css';

const Product = () => {
  return (
    <div className='container'>
      <div className='cart'>
        <i className='fas fa-shopping-cart'></i>
      </div>
      <div className='container-inside'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Product;
