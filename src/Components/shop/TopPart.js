import React from 'react';
import { useDispatch } from 'react-redux';

const TopPart = () => {
  const dispatch = useDispatch();

  const searchInputChange = (e) => {
    dispatch({
      type: 'SEARCH_PRODUCTS',
      payload: e.target.value,
    });
  };

  return (
    <div className='top-part'>
      <div className='shop-name'>Your Shop Name</div>
      <form className='search'>
        <input
          type='search'
          placeholder='Product'
          onChange={searchInputChange}
        />
        <button className='search-icon'>
          <i className='fas fa-search'></i>
        </button>
      </form>
      <div className='cart'>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </div>
  );
};

export default TopPart;
