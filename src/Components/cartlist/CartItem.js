import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProductQuantity, removeProduct } from '../../States/cart/action';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const CartItem = (props) => {
  const { product, updateProductQuantity, removeProduct } = props;
  const [amount, setAmount] = useState(product.quantity);

  const addAmount = () => {
    setAmount(amount + 1);
    updateProductQuantity(1, product.product_id);
  };

  const reduceAmount = () => {
    setAmount(amount - 1);
    updateProductQuantity(-1, product.product_id);
  };

  const removeProductFromCart = () => {
    alert(`are you sure?`);
    removeProduct(product.id);
  };

  return (
    <div className='cart-item'>
      <div className='cart-product'>
        <img
          src={product.product.image}
          alt='product'
          className='product-img'
        />
        <h5 className='item-name my-auto'>{product.product.title}</h5>
      </div>
      <p className='item-price text-center my-auto'>
        {`$ ${product.product.price}`}
      </p>
      <div className='item-amount text-center my-auto'>
        <AiFillMinusCircle
          style={{ cursor: 'pointer' }}
          onClick={reduceAmount}
        />
        <span className='amount'>{amount}</span>
        <AiFillPlusCircle style={{ cursor: 'pointer' }} onClick={addAmount} />
      </div>
      <span className='total text-center my-auto'>{`$ ${
        amount * product.product.price
      }`}</span>
      <div className='remove text-center my-auto'>
        <BsFillTrashFill
          style={{ cursor: 'pointer' }}
          onClick={removeProductFromCart}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateProductQuantity: (quantity, product_id) =>
    dispatch(updateProductQuantity(quantity, product_id)),
  removeProduct: (id) => dispatch(removeProduct(id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
