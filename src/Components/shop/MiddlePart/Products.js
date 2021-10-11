import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const { productsShowed } = useSelector((state) => state.productsReducer);

  return (
    <div className='product-list'>
      <div className='products'>
        {productsShowed.map((product) => {
          return (
            <Link
              to={{ pathname: `/product/${product.title}` }}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
