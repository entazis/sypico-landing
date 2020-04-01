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
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#our-work">Our Work</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default navbar;