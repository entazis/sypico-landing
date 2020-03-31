import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import classes from './navbar.module.css';

const navbar = () => {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SyPiCo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={['ml-auto', classes.navText]}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#about">Team</Nav.Link>
            <Nav.Link href="#home">Our Work</Nav.Link>
            <Nav.Link href="#about">Testimonials</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#about">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default navbar;