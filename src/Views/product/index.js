import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LeftSide from '../../Components/product/LeftSide';
import RightSide from '../../Components/product/RightSide';
import Cart from '../../Components/Cart';
import './index.css';

const Product = () => {
  const { products } = useSelector((state) => state.productsReducer);

  let { productName } = useParams();

  const [source, setSource] = useState(['']);
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    const product = products.find((item) => {
      return item.title === productName;
    });

    setSource(product.source);
    // eslint-disable-next-line
  }, [productName]);

  const modalToggle = () => {
    setCartModal(!cartModal);
  };

  return (
    <div className='container-product'>
      <div className='cart'>
        <i className='fas fa-shopping-cart' onClick={modalToggle}></i>
      </div>
      <div className='container-inside'>
        <LeftSide imageSource={source} />
        <RightSide />
      </div>
      <Cart isShown={cartModal} modalToggle={modalToggle} />
    </div>
  );
};

export default Product;
