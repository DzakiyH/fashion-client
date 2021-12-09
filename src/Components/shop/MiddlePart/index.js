import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getAllProducts,
  getAllCategories,
} from '../../../States/products/action';
import Filters from './Filters';
import Products from './Products';
import Features from './Features';

const MiddlePart = (props) => {
  const { getAllProducts, getAllCategories } = props;

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='middle-part'>
      <Features />
      <Products />
      <Filters />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
  getAllCategories: () => dispatch(getAllCategories()),
});

export default connect(null, mapDispatchToProps)(MiddlePart);
