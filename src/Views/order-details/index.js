import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import Order from '../../Components/order-details/Order';
import { getAllOrders } from '../../States/cart/action';
import { Card, Button } from 'react-bootstrap';
import { GoVerified } from 'react-icons/go';
import { MdScheduleSend } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import './index.css';

const OrderDetails = ({ getAllOrders }) => {
  const { orderProducts, orders } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  return (
    <NavbarLayout>
      <div className='order-details'>
        <Card>
          <Card.Header className='text-center'>Order Details</Card.Header>
          <Card.Body>
            <div className='order-detail'>
              <div className='order-verified active'>
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
            <div className='products-header'>
              <div className='product-image'>product</div>
              <div className='name'>name</div>
              <div className='quantity'>quantity</div>
            </div>
            {orderProducts &&
            orderProducts.length !== 0 &&
            Object.keys(orderProducts).length !== 0 ? (
              orderProducts.map((orderProduct, index) => {
                return (
                  <div className='orders' key={index}>
                    <div className='header'>{`Order ${index + 1}`}</div>
                    {orderProduct.map((product, index) => {
                      return <Order product={product} key={index} />;
                    })}
                    {
                      (orders && orders.length !== 0,
                      Object.keys(orders).length !== 0 ? (
                        <div className='status'>{`Status: ${orders[index].order_status.status}`}</div>
                      ) : null)
                    }
                  </div>
                );
              })
            ) : (
              <div>you have no order</div>
            )}
            <div className='back-btn'>
              <Link to={{ pathname: '/' }}>
                <Button variant='primary'>Back</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllOrders: () => dispatch(getAllOrders()),
});

export default connect(null, mapDispatchToProps)(OrderDetails);
