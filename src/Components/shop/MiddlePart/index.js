import React from 'react';
import Filters from './Filters';
import Products from './Products';
import Features from './Features';

const MiddlePart = (props) => {
  return (
    <div className='middle-part'>
      <Features />
      <Products />
      <Filters />
    </div>
  );
};

export default MiddlePart;
