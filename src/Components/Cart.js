import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Cart = ({ isShown, modalToggle }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isShown);
  }, [isShown]);

  const handleClose = () => {
    setShow(false);
    modalToggle();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
