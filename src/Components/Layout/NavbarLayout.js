import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarLayout = (props) => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href='#home'>Login</Nav.Link>
            <Nav.Link href='#features'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
};

export default NavbarLayout;
