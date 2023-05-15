import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const TopPart = () => {
  const dispatch = useDispatch();

  const searchInputChange = (e) => {
    dispatch({
      type: 'SEARCH_PRODUCTS',
      payload: e.target.value,
    });
  };

  return (
    <>
      <div className='top-part'>
        <div className='shop-name'>Fashionlution</div>
        <form className='search'>
          <input
            type='search'
            placeholder='Search'
            onChange={searchInputChange}
          />
          <button className='search-icon'>
            <i className='fas fa-search'></i>
          </button>
        </form>
        <Link
          to={{ pathname: '/cart-list' }}
          style={{ color: '#000' }}
          className='cart'
        >
          <i className='fas fa-shopping-cart'></i>
        </Link>
      </div>
    </>
  );
};

export default TopPart;
