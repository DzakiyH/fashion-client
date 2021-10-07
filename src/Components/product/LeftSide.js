import React from 'react';
import productMen from '../../Assets/images/product_men.png';

const LeftSide = () => {
  return (
    <div className='left-side'>
      <div className='image'>
        <img src={productMen} alt='product' />
        <div className='navigation'>
          <button className='arrow-btn'>
            <i className='fas fa-chevron-left'></i>
          </button>
          <button className='arrow-btn'>
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
