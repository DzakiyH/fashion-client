import React from 'react';

const Product = () => {
  return (
    <div>
      <div className='cart'>
        <i className='fas fa-shopping-cart'></i>
      </div>
      <div className='container'>
        <div className='left-side'>
          <div className='image'>
            <img src='#' alt='product-image' />
            <div className='navigation'>
              <button className='arrow-btn'>
                <i className='fas fa-chevron-left'></i>
              </button>
              <button className='arrow-btn'>
                <i className='fas fa-chevron-right'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='right-side'>
          <a href='#'>
            <div className='back-btn'>go back</div>
          </a>
          <div className='item-name'>
            <span className='item-color'>Color</span>
            <span className='item-type'>Item Type / Name</span>
          </div>
          <div className='item-price'>
            <span className='current-price'>$19.99</span>
            <span className='current-price'>$39.99</span>
          </div>
          <div className='item-description'>
            <div className='short-description'>Kacamata tampan dan berani</div>
            <div className='long-description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui
              ad quidem cumque similique officiis quibusdam dolor, odit eligendi
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
      </div>
    </div>
  );
};

export default Product;
