import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

const MiddlePart = () => {
  const { features, filters, productsShowed } = useSelector(
    (state) => state.productsReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_PRODUCTS',
    });
    // eslint-disable-next-line
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

  const ratingFilterClicked = (rating, id) => {
    dispatch({
      type: 'FILTER_BY_RATING',
      payload: rating,
    });
    dispatch({
      type: 'FILTER_ACTIVE',
      payload: id,
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
                  <div className='title'>{product.title}</div>
                  <div className='category'>
                    category: {product.category.join(', ')}
                  </div>
                  <div className='rating'>
                    {Array.from({ length: product.rating }, (item, index) => (
                      <i key={index} class='fas fa-star'></i>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='filters'>
        <ul className='filter-list'>
          {filters.map((filter) => {
            return filter.filter === 'all' ? (
              <li
                key={filter.id}
                onClick={() => ratingFilterClicked(filter.filter, filter.id)}
              >
                {filter.filter}
              </li>
            ) : (
              <li
                key={filter.id}
                onClick={() => ratingFilterClicked(filter.filter, filter.id)}
              >
                <div className='rating'>
                  {Array.from({ length: filter.filter }, (item, index) => (
                    <i key={index} class='fas fa-star'></i>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MiddlePart;
