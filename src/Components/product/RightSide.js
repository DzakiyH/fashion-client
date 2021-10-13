import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const RightSide = () => {
  const { product } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
    });
    alert(`${product.title} sudah ditambahkan ke dalam cart anda!`);
  };

  return (
    <div className='right-side'>
      <Link to={{ pathname: '/shop' }}>
        <div className='back-btn'>go back</div>
      </Link>
      <div className='item-name'>
        <span className='item-color'>Color</span>
        <br />
        <span className='item-type'>{product.title.toUpperCase()}</span>
      </div>
      <div className='item-price'>
        <span className='current-price'>$19.99</span>
        <br />
        <span className='original-price'>$39.99</span>
      </div>
      <div className='item-description'>
        <div className='short-description'>Kacamata tampan dan berani</div>
        <div className='long-description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui ad
          quidem cumque similique officiis quibusdam dolor, odit eligendi
          nostrum! Laudantium, inventore? Minima natus amet iusto dolor qui,
          deserunt corrupti!
        </div>
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
  );
};

export default RightSide;
