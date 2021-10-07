import React from 'react';
import BottomPart from '../../Components/shop/BottomPart';
import MiddlePart from '../../Components/shop/MiddlePart';
import TopPart from '../../Components/shop/TopPart';
import './index.css';

const Shop = () => {
  return (
    <div className='container-shop'>
      <TopPart />
      <MiddlePart />
      <BottomPart />
    </div>
  );
};

export default Shop;
