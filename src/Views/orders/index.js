import React from 'react';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import OrderItem from '../../Components/orders/OrderItem';
import { Card, Button } from 'react-bootstrap';
import './index.css';

const index = () => {
  return (
    <NavbarLayout>
      <div className='orders'>
        <Card>
          <Card.Header as='h5'>Your Orders</Card.Header>
          <Card.Body>
            <ul className='orders-header'>
              <li className='product'>product</li>
              <li className='status'>status</li>
              <li className='action'>action</li>
            </ul>
            <OrderItem />
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

export default index;
