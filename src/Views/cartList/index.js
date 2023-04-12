import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import useRouter from 'use-react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { getCartProducts } from '../../States/cart/action';
import { Card, Button } from 'react-bootstrap';
import CartItem from '../../Components/cartlist/CartItem';
import './index.css';

const CartList = (props) => {
  const { getCartProducts } = props;
  const { cart, totalPayment } = useSelector((state) => state.cartReducer);
  const { history } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getCartProducts();
  }, [getCartProducts]);

  const setNewOrder = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/order/new-order`,
        { total_payment: totalPayment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (res.data.code === 201) {
        dispatch({
          type: 'UPDATE_ORDER_ID',
          payload: res.data.data.orderId,
        });
        history.push('/payment');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <NavbarLayout>
      <div className='cart-list'>
        <Card>
          <Card.Header as='h5'>Your Cart</Card.Header>
          <Card.Body>
            <ul className='cart-header'>
              <li className='product'>product</li>
              <li className='price'>price</li>
              <li className='amount'>amount</li>
              <li className='total'>total</li>
              <li className='action'>action</li>
            </ul>

            {cart && cart.length !== 0 && Object.keys(cart).length !== 0 ? (
              cart.map((product) => {
                return <CartItem key={product.id} product={product} />;
              })
            ) : (
              <div
                className='text-center'
                style={{ fontSize: '20px', textTransform: 'uppercase' }}
              >
                your cart is empty
              </div>
            )}
            <div className='total-payment'>
              <div className='total1'>total:</div>
              <div className='total2'>{` $ ${totalPayment}`}</div>
            </div>
            <div className='button'>
              <Link to={{ pathname: '/shop' }}>
                <Button variant='primary'>Go Back</Button>
              </Link>
              <Button variant='success' onClick={setNewOrder}>
                To Payment
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCartProducts: () => dispatch(getCartProducts()),
});

export default connect(null, mapDispatchToProps)(CartList);
