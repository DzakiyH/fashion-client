import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cart from '../Cart';
import { IsFirstRender } from '../../Utils/IsFirstRender';

const TopPart = () => {
  const [cartModal, setCartModal] = useState(false);

  const isFirst = IsFirstRender();

  const dispatch = useDispatch();

  const searchInputChange = (e) => {
    dispatch({
      type: 'SEARCH_PRODUCTS',
      payload: e.target.value,
    });
  };

  const modalToggle = () => {
    setCartModal(!cartModal);
  };

  return (
    <>
      <Cart isShown={cartModal} modalToggle={modalToggle} />
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
        <div className='cart' onClick={modalToggle}>
          <i className='fas fa-shopping-cart'></i>
        </div>
      </div>
    </>
  );
};

export default TopPart;
