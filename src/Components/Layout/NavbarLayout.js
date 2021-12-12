import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarLayout = (props) => {
  const isLogin = localStorage.getItem('isLogin');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
    window.location.reload();
  };

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Navbar</Navbar.Brand>
          {isLogin ? (
            <Nav>
              <Nav.Link href='/order-details'>Order</Nav.Link>
              <Nav.Link href='#' onClick={logout}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href='/login-user'>Login</Nav.Link>
              <Nav.Link href='/register-user'>Register</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      {props.children}
    </>
  );
};

export default NavbarLayout;
