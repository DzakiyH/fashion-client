import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Features = () => {
  const { filters } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

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
    <div className='filters'>
      <ul className='filter-list'>
        {filters.map((filter) => {
          return filter.filter === 'all' ? (
            <li
              key={filter.id}
              onClick={() => ratingFilterClicked(filter.filter, filter.id)}
              className={filter.isActive ? 'active top-filter' : 'top-filter'}
            >
              {filter.filter}
            </li>
          ) : (
            <li
              key={filter.id}
              onClick={() => ratingFilterClicked(filter.filter, filter.id)}
              className={filter.isActive ? 'active star' : 'star'}
            >
              <div className='rating'>
                {Array.from({ length: filter.filter }, (item, index) => (
                  <i key={index} className='fas fa-star'></i>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;
