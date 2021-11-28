import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarLayout = (props) => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href='/login-user'>Login</Nav.Link>
            <Nav.Link href='/register-user'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
};

export default NavbarLayout;
