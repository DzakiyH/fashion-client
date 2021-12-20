import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const RightSide = () => {
  const { product } = useSelector((state) => state.productsReducer);

  const addToCart = async () => {
    try {
      const res = await axios.post(
        'http://localhost:8000/cart/add-product',
        {
          product_id: product.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (res && res.data.code === 201) {
        alert(`${product.title} has been successfully added to the cart`);
      } else {
        alert('error login');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.message === 'jwt expired') {
          alert('you need to login');
        } else {
          alert('you need to login first');
        }
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className='right'>
      {Object.keys(product).length !== 0 ? (
        <div className='right-side'>
          <Link to={{ pathname: '/shop' }}>
            <div className='back-btn'>go back</div>
          </Link>
          <div className='item-name'>
            {/* <span className='item-color'>Color</span> */}
            <br />
            <span className='item-type'>{product.title.toUpperCase()}</span>
          </div>
          <div className='item-price'>
            <span className='current-price'>{`$ ${product.price}`}</span>
            <br />
            {/* <span className='original-price'>$39.99</span> */}
          </div>
          <div className='item-description'>
            <div className='short-description'>product's short description</div>
            <div className='long-description'>{product.description}</div>
          </div>
          <div className='size-selection'>
            <label htmlFor='size'>Size: </label>
            <select name='size' id='size'>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </div>
          <div className='cart-section'>
            <button className='cart-btn' onClick={addToCart}>
              add to cart
            </button>
            <div className='advertisement'>
              <span>Mens</span>
              <br />
              <span>100% Cotton</span>
            </div>
          </div>
        </div>
      ) : (
        <div>null</div>
      )}
    </div>
  );
};

export default RightSide;
