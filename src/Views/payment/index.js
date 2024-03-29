import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import useRouter from 'use-react-router';
import { useParams } from 'react-router-dom';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import OrderDetails from '../../Components/payment/OrderDetails';
import {
  getCartProducts,
  emptyCart,
  getUserAddress,
} from '../../States/cart/action';
import { Card, Button, Form } from 'react-bootstrap';
import './index.css';

const Payment = (props) => {
  const { history } = useRouter();
  const { orderId } = useParams();
  const { getCartProducts, emptyCart, getUserAddress } = props;
  const { cart, userAddress, totalPayment } = useSelector(
    (state) => state.cartReducer
  );
  // definitely too long, try making it cleaner
  const [address, setAddress] = useState({
    first_name: '',
    last_name: '',
    address: '',
    province: '',
    city: '',
    postal_code: '',
    phone_number: '',
  });
  const [payment, setPayment] = useState('');

  const onChangeField = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePayment = (e) => {
    setPayment([e.target.value]);
  };

  useEffect(() => {
    getCartProducts();
    getUserAddress();

    if (userAddress && Object.keys(userAddress).length !== 0) {
      setAddress({
        first_name: userAddress.first_name,
        last_name: userAddress.last_name,
        address: userAddress.address,
        province: userAddress.province,
        city: userAddress.city,
        postal_code: userAddress.postal_code,
        phone_number: userAddress.phone_number,
      });
    }
  }, [getCartProducts, getUserAddress, userAddress.first_name]);

  const orderPayment = async () => {
    try {
      const resOP = await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/order/order-products`,
        {
          cart,
          orderId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (resOP.data.code !== 201) {
        alert('error processing order');
        return;
      }

      emptyCart(cart[0].cart_id);

      const resAD = await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/order/address`,
        address,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (resAD.data.code === 201) {
        history.push('/order-details');
      } else {
        alert('error processing order');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onCancelPayment = async () => {
    try {
      const deleteOrder = await axios.delete(
        `${process.env.REACT_APP_SERVER_HOST}/order/delete-order/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (deleteOrder.data.code === 200) {
        history.push('/cart-list');
      } else {
        alert('error cancelling order');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <NavbarLayout>
      <div className='payment'>
        <Card>
          <Card.Header>Checkout</Card.Header>
          <Card.Body>
            <Form>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='First Name'
                    name='first_name'
                    onChange={onChangeField}
                    value={address.first_name}
                  />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Last Name'
                    name='last_name'
                    onChange={onChangeField}
                    value={address.last_name}
                  />
                </Form.Group>
              </div>
              <Form.Group className='mb-3 first-name'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as='textarea'
                  style={{ height: '100px' }}
                  placeholder='Your Address'
                  name='address'
                  onChange={onChangeField}
                  value={address.address}
                />
              </Form.Group>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='State or Province'
                    name='province'
                    onChange={onChangeField}
                    value={address.province}
                  />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='City'
                    name='city'
                    onChange={onChangeField}
                    value={address.city}
                  />
                </Form.Group>
              </div>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>Zip/Postal Code</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Zip or Postal Code'
                    name='postal_code'
                    onChange={onChangeField}
                    value={address.postal_code}
                  />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>phone</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='phone'
                    name='phone_number'
                    onChange={onChangeField}
                    value={address.phone_number}
                  />
                </Form.Group>
              </div>

              <div className='order-headers'>
                <div className='product'>product</div>
                <div className='quantity'>quantity</div>
                <div className='total'>total</div>
              </div>

              {cart && cart.length !== 0 && Object.keys(cart).length !== 0 ? (
                cart.map((product) => {
                  return <OrderDetails key={product.id} product={product} />;
                })
              ) : (
                <div>retrieving data...</div>
              )}

              <div className='total-payment'>
                <div className='total'>total:</div>
                <div className='amount'>{`$ ${totalPayment}`}</div>
              </div>

              <div className='payment-method'>
                <div className='payment-source'>
                  <Form.Check
                    type='radio'
                    name='payment-method'
                    label='bni'
                    value='bni'
                    onChange={onChangePayment}
                  />
                  <img
                    src='/images/bni.png'
                    alt='payment'
                    style={{ width: '100px' }}
                  />
                </div>
                <div className='payment-source'>
                  <Form.Check
                    type='radio'
                    name='payment-method'
                    label='mandiri'
                    value='mandiri'
                    onChange={onChangePayment}
                  />
                  <img
                    src='/images/mandiri.png'
                    alt='payment'
                    style={{ width: '100px' }}
                  />
                </div>
                <div className='payment-source'>
                  <Form.Check
                    type='radio'
                    name='payment-method'
                    label='bri'
                    value='bri'
                    onChange={onChangePayment}
                  />
                  <img
                    src='/images/bri.png'
                    alt='payment'
                    style={{ width: '100px' }}
                  />
                </div>
              </div>
            </Form>

            <div className='payment-btn'>
              <Button variant='danger' onClick={onCancelPayment}>
                Cancel
              </Button>
              <Button variant='primary' onClick={orderPayment}>
                Proceed
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
  emptyCart: (id) => dispatch(emptyCart(id)),
  getUserAddress: () => dispatch(getUserAddress()),
});

export default connect(null, mapDispatchToProps)(Payment);
