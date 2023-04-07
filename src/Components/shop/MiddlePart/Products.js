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
    // eslint-disable-next-line
  }, []);

  const productClicked = (id) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: id,
    });
  };

  console.log(productsShowed);

  return (
    <div className='product-list'>
      <div
        className='products'
        style={
          productsShowed && productsShowed.length !== 0
            ? {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                rowGap: '60px',
              }
            : null
        }
      >
        {productsShowed && productsShowed.length !== 0 ? (
          productsShowed.map((product) => {
            return (
              <Link
                onClick={() => productClicked(product.id)}
                to={{ pathname: `/product/${product.title}` }}
                className='product'
                key={product.id}
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  textDecoration: 'none',
                }}
              >
                <div className='description'>
                  <div className='title'>{product.title}</div>
                  <div className='category'>
                    category: {product.categories.name}
                  </div>
                  {/* <div className='rating'>
                    {Array.from({ length: product.rating }, (item, index) => (
                      <i key={index} className='fas fa-star'></i>
                    ))}
                  </div> */}
                </div>
              </Link>
            );
          })
        ) : (
          <div className='empty-product'>
            <div>Tidak ada produk yang dapat ditampilkan</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
