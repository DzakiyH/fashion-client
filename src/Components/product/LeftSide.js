import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrayByIndex from '../../Utils/ArrayByIndex';

const LeftSide = () => {
  const { products, product } = useSelector((state) => state.productsReducer);
  const [previousProduct, setPreviousProduct] = useState({});
  const [followingProduct, setFollowingProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const prev = ArrayByIndex(product.id - 2, products);
    const foll = ArrayByIndex(product.id, products);

    setPreviousProduct(prev);
    setFollowingProduct(foll);
    // eslint-disable-next-line
  }, [product]);

  const goToPreviousProduct = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: previousProduct.id,
    });
  };

  const goToFollowingProduct = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: followingProduct.id,
    });
  };

  return (
    <div className='left-side'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${product.source})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='navigation'>
          <Link
            to={{ pathname: `/product/${previousProduct.title}` }}
            className='arrow-btn'
            onClick={goToPreviousProduct}
          >
            <i className='fas fa-chevron-left'></i>
          </Link>
          <Link
            to={{ pathname: `/product/${followingProduct.title}` }}
            className='arrow-btn'
            onClick={goToFollowingProduct}
          >
            <i className='fas fa-chevron-right'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
