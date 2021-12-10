import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LeftSide from '../../Components/product/LeftSide';
import RightSide from '../../Components/product/RightSide';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { Spinner } from 'react-bootstrap';
import './index.css';

const Product = () => {
  const { products, product } = useSelector((state) => state.productsReducer);

  let { productName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products && products.length !== 0) {
      const product = products.find((item) => {
        return item.title.toLowerCase() === productName.toLowerCase();
      });

      dispatch({
        type: 'ADD_PRODUCT',
        payload: product.id,
      });
    }
    // eslint-disable-next-line
  }, [products]);

  return (
    <NavbarLayout>
      {products && products.length !== 0 ? (
        <div className='container-product'>
          <Link to={{ pathname: `/cart-list` }} className='cart'>
            <i className='fas fa-shopping-cart'></i>
          </Link>
          <div className='container-inside'>
            {Object.keys(product).length !== 0 ? (
              <LeftSide />
            ) : (
              <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            )}
            {Object.keys(product).length !== 0 ? (
              <RightSide />
            ) : (
              <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            )}
          </div>
        </div>
      ) : (
        <div className='spinner'>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      )}
    </NavbarLayout>
  );
};

export default Product;
