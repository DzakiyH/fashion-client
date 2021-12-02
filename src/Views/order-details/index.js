import React from 'react';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import Order from '../../Components/order-details/Order';
import { Card, Button } from 'react-bootstrap';
import { GoVerified } from 'react-icons/go';
import { MdScheduleSend } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import './index.css';

const index = () => {
  return (
    <NavbarLayout>
      <div className='order-details'>
        <Card>
          <Card.Header className='text-center'>Order Details</Card.Header>
          <Card.Body>
            <div className='order-detail'>
              <div className='order-verified'>
                <GoVerified />
                <span>order verified</span>
              </div>
              <div className='order-sent'>
                <MdScheduleSend />
                <span>order sent</span>
              </div>
              <div className='order-received'>
                <GiReceiveMoney />
                <span>order received</span>
              </div>
            </div>
            <Order />
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

export default index;
