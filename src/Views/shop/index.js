import React from 'react';
import BottomPart from '../../Components/shop/BottomPart';
import MiddlePart from '../../Components/shop/MiddlePart';
import TopPart from '../../Components/shop/TopPart';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import './index.css';

const Shop = () => {
  return (
    <NavbarLayout>
      <div className='container-shop'>
        <TopPart />
        <MiddlePart />
        <BottomPart />
      </div>
    </NavbarLayout>
  );
};

export default Shop;
