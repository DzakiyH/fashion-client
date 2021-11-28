import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LeftSide from '../../Components/product/LeftSide';
import RightSide from '../../Components/product/RightSide';
import Cart from '../../Components/Cart';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import './index.css';

const Product = () => {
  const { products } = useSelector((state) => state.productsReducer);

  let { productName } = useParams();
  const [cartModal, setCartModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((item) => {
      return item.title === productName;
    });

    dispatch({
      type: 'ADD_PRODUCT',
      payload: product.id,
    });
    // eslint-disable-next-line
  }, [productName]);

  const modalToggle = () => {
    setCartModal(!cartModal);
  };

  return (
    <NavbarLayout>
      <div className='container-product'>
        <div className='cart'>
          <i className='fas fa-shopping-cart' onClick={modalToggle}></i>
        </div>
        <div className='container-inside'>
          <LeftSide />
          <RightSide />
        </div>
        <Cart isShown={cartModal} modalToggle={modalToggle} />
      </div>
    </NavbarLayout>
  );
};

export default Product;
