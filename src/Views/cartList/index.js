import React from 'react';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { Card, Button } from 'react-bootstrap';
import CartItem from '../../Components/cartlist/CartItem';
import './index.css';

const index = () => {
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

            <CartItem />
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

export default index;
