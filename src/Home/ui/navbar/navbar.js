import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import classes from './navbar.module.css';

const navbar = () => {
  return (
      <div className={classes.navbarArea}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img alt='logo' className={classes.Logo}
                src='https://static.wixstatic.com/media/68e9b9_006908abe93a4b0bbe66315acd8bcee4~mv2_d_1200_1200_s_2.png/v1/fill/w_117,h_117,al_c,q_85,usm_0.66_1.00_0.01/logo.webp'/>
          </Navbar.Brand>
          <NavDropdown id='language-selector-dropdown' title={<span className={classes.languageSelector}>Language</span>}>
            <NavDropdown.Item href="/en">EN</NavDropdown.Item>
            <NavDropdown.Item href="/nl">NL</NavDropdown.Item>
          </NavDropdown>
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
      </div>
  );
};

export default navbar;