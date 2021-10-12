import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const { productsShowed } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'EMPTY_PRODUCT',
    });
  }, []);

  const productClicked = (id) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: id,
    });
  };

  return (
    <div className='product-list'>
      <div className='products'>
        {productsShowed.map((product) => {
          return (
            <Link
              onClick={() => productClicked(product.id)}
              to={{ pathname: `/product/${product.title}` }}
              className='product'
              key={product.id}
              style={{
                backgroundImage: `url(${product.source})`,
                backgroundSize: 'cover',
                textDecoration: 'none',
              }}
            >
              <div className='description'>
                <div className='title'>{product.title}</div>
                <div className='category'>
                  category: {product.category.join(', ')}
                </div>
                <div className='rating'>
                  {Array.from({ length: product.rating }, (item, index) => (
                    <i key={index} className='fas fa-star'></i>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
