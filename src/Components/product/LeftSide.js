import React from 'react';

const LeftSide = () => {
  return (
    <div className='left-side'>
      <div className='image'>
        <img
          src={`${process.env.PUBLIC_URL}/images/product_men.png`}
          alt='product'
        />
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
