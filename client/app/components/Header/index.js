import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img alt="" width="140px" height="48px" src={logo} />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
