import React from 'react';
import './index.css';

const Shop = () => {
  return (
    <div className='container'>
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
      <div className='middle-part'>
        <div className='features'>
          <ul className='featured-list'>
            <li className='list-top'>Featured</li>
            <li className='active'>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
          </ul>
        </div>
        <div className='product-list'>
          <div className='product product1 active'>
            {/* THIS IS WHERE YOU LOOP */}
            <a href='#'>
              <div className='product'>
                <div className='description'>
                  <div className='title'>title here</div>
                  <div className='category'>category</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='filters'>
          <ul className='filter-list'>
            <li>all</li>
            <li className='active'>filter 1</li>
            <li>filter 2</li>
            <li>filter 3</li>
            <li>filter 4</li>
            <li>filter 5</li>
          </ul>
        </div>
      </div>
      <div className='bottom-part'>
        <ul>
          <li className='product-navigation active'>1</li>
          <li className='product-navigation'>2</li>
          <li className='product-navigation'>3</li>
          <li className='product-navigation'>4</li>
          <li className='product-navigation'>5</li>
          <li className='product-navigation'>6</li>
          <li className='product-navigation'>7</li>
          <li className='product-navigation'>8</li>
          <li className='product-navigation'>9</li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
