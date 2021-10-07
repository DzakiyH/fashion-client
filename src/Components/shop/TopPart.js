import React from 'react';

const TopPart = () => {
  return (
    <div className='top-part'>
      <div className='shop-name'>Your Shop Name</div>
      <form action='#' className='search'>
        <input type='search' placeholder='Product' />
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
