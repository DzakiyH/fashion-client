import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <img
        src='/images/men_clothes.jpg'
        alt='product'
        className='product-img'
      />
      <h5 className='item-name my-auto'>here is item name</h5>
      <p className='item-price text-center my-auto'>price</p>
      <div className='item-amount text-center my-auto'>
        <AiFillPlusCircle />
        <span className='amount'>1</span>
        <AiFillMinusCircle />
      </div>
      <span className='total text-center my-auto'>122134</span>
      <div className='remove text-center my-auto'>
        <BsFillTrashFill />
      </div>
    </div>
  );
};

export default CartItem;
