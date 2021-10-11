import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Filters = () => {
  const { features } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

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
  );
};

export default Filters;
