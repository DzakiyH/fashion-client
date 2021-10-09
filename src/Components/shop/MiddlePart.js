import React from 'react';
import { Link } from 'react-router-dom';

const MiddlePart = () => {
  return (
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
          <Link to={{ pathname: '/product' }}>
            <div className='product'>
              <div className='description'>
                <div className='title'>title here</div>
                <div className='category'>category</div>
              </div>
            </div>
          </Link>
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
  );
};

export default MiddlePart;
