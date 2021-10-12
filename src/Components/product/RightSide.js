import React from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
  return (
    <div className='right-side'>
      <Link to={{ pathname: '/shop' }}>
        <div className='back-btn'>go back</div>
      </Link>
      <div className='item-name'>
        <span className='item-color'>Color</span>
        <br />
        <span className='item-type'>Item Type / Name</span>
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
        <button className='cart-btn'>add to cart</button>
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
