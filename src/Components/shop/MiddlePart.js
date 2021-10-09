import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

const MiddlePart = () => {
  const { features, productsShowed } = useSelector(
    (state) => state.productsReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_PRODUCTS',
    });
  }, []);

  const featureClicked = (key, feature) => {
    dispatch({
      type: 'FEATURE_ACTIVE',
      payload: key,
    });
    dispatch({
      type: 'FEATURED_PRODUCTS',
      payload: feature,
    });
  };

  return (
    <div className='middle-part'>
      <div className='features'>
        <ul className='featured-list'>
          <li className='top-list'>features</li>
          {features.map((item) => {
            return (
              <li
                key={item.id}
                className={item.isActive ? 'active' : ''}
                onClick={() => featureClicked(item.id, item.category)}
              >
                {item.category}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='product-list'>
        <div className='products'>
          {productsShowed.map((product) => {
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
