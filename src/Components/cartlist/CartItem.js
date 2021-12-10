import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { getCartProducts } from '../../States/cart/action';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const CartItem = (props) => {
  const { getCartProducts } = props;
  const { cart } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    getCartProducts();
  }, [getCartProducts]);

  return cart.map((product) => {
    return (
      <div className='cart-item' key={product.id}>
        <img
          src={product.product.image}
          alt='product'
          className='product-img'
        />
        <h5 className='item-name my-auto'>{product.product.title}</h5>
        <p className='item-price text-center my-auto'>
          {`$ ${product.product.price}`}
        </p>
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
  });
};

const mapDispatchToProps = (dispatch) => ({
  getCartProducts: () => dispatch(getCartProducts()),
});

export default connect(null, mapDispatchToProps)(CartItem);
