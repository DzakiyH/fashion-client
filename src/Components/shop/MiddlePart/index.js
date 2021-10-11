import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filters from './Filters';
import Products from './Products';
import Features from './Features';

const MiddlePart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_PRODUCTS',
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='middle-part'>
      <Filters />
      <Products />
      <Features />
    </div>
  );
};

export default MiddlePart;
