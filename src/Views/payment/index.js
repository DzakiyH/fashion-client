import React from 'react';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { Card, Button, Form } from 'react-bootstrap';
import './index.css';

const index = () => {
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
                  <Form.Control type='text' placeholder='First Name' />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='text' placeholder='Last Name' />
                </Form.Group>
              </div>
              <Form.Group className='mb-3 first-name'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as='textarea'
                  style={{ height: '100px' }}
                  placeholder='Your Address'
                />
              </Form.Group>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control type='text' placeholder='State or Province' />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>City</Form.Label>
                  <Form.Control type='text' placeholder='City' />
                </Form.Group>
              </div>
              <div className='double-input'>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>Zip/Postal Code</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Zip or Postal Code'
                  />
                </Form.Group>
                <Form.Group className='mb-3 half-input'>
                  <Form.Label>phone</Form.Label>
                  <Form.Control type='number' placeholder='phone' />
                </Form.Group>
              </div>
              <div className='payment-method'>
                <div className='payment-source'>
                  <Form.Check type='radio' name='payment-method' label='bni' />
                  <img
                    src='/images/men_clothes.jpg'
                    alt='payment'
                    style={{ width: '100px' }}
                  />
                </div>
                <div className='payment-source'>
                  <Form.Check
                    type='radio'
                    name='payment-method'
                    label='mandiri'
                  />
                  <img
                    src='/images/men_clothes.jpg'
                    alt='payment'
                    style={{ width: '100px' }}
                  />
                </div>
                <div className='payment-source'>
                  <Form.Check type='radio' name='payment-method' label='bri' />
                  <img
                    src='/images/men_clothes.jpg'
                    alt='payment'
                    style={{ width: '100px' }}
                  />
                </div>
              </div>
            </Form>
            <div className='payment-btn'>
              <Button variant='primary'>Proceed</Button>
              <Button variant='danger'>Go Back</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

export default index;
