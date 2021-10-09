import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MiddlePart = () => {
  const { products, features, productsShowed } = useSelector(
    (state) => state.productsReducer
  );

  const dispatch = useDispatch();

  const featureClicked = (key) => {
    dispatch({
      type: 'FEATURE_ACTIVE',
      payload: key,
    });
  };

  return (
    <div className='middle-part'>
      <div className='features'>
        <ul className='featured-list'>
          <li className='top-list'>features</li>
          {features.map((feature) => {
            return (
              <li
                key={feature.id}
                className={feature.isActive ? 'active' : ''}
                onClick={() => featureClicked(feature.id)}
              >
                {feature.feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='product-list'>
        <div className='products'>
          {products.map((product) => {
            return (
              <div
                className='product'
                key={product.id}
                style={{
                  backgroundImage: `url(${product.source})`,
                  backgroundSize: 'cover',
                }}
              >
                <div className='description'>
                  <div className='title'>title here</div>
                  <div className='category'>category</div>
                </div>
              </div>
            );
          })}
          {/* THIS IS WHERE YOU LOOP */}

          {/* <div className='product'>
            <div className='description'>
              <div className='title'>title here</div>
              <div className='category'>category</div>
            </div>
          </div> */}
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
