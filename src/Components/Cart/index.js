import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IsFirstRender } from '../../Utils/IsFirstRender';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';

const Cart = ({ isShown, modalToggle }) => {
  const { cart } = useSelector((state) => state.productsReducer);
  const [show, setShow] = useState(false);
  const isFirst = IsFirstRender();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirst) {
      return;
    } else {
      setShow(isShown);
    }
    // eslint-disable-next-line
  }, [isShown]);

  const handleClose = () => {
    setShow(false);
    modalToggle();
  };

  const removeCartItem = (id) => {
    dispatch({
      type: 'REMOVE_CART_ITEM',
      payload: id,
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {cart && cart.length !== 0 ? (
              <Row className='fw-bold'>
                <Col sm={8}>Name</Col>
                <Col sm={2}>Quantity</Col>
                <Col sm={2}>Remove</Col>
              </Row>
            ) : (
              <Row>Cart anda kosong</Row>
            )}
            {cart && cart.length !== 0
              ? cart.map((item) => {
                  return (
                    <Row className='text-center'>
                      <Col sm={8} className='text-start'>
                        {item.title}
                      </Col>
                      <Col sm={2}>{item.quantity}</Col>
                      <Col sm={2}>
                        <i
                          class='fas fa-times-circle'
                          style={{ cursor: 'pointer' }}
                          onClick={() => removeCartItem(item.id)}
                        ></i>
                      </Col>
                    </Row>
                  );
                })
              : null}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
