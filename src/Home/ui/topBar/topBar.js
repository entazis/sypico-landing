import React from 'react';
import { useLocation } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import classes from './topBar.module.css';
import messages from '../../../localization/en-base';
import {FormattedMessage} from 'react-intl';

export default function TopBar() {
  const location = useLocation();
  return (
      <div className={classes.navbarArea}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img alt='logo' className={classes.Logo}
                src='https://static.wixstatic.com/media/68e9b9_006908abe93a4b0bbe66315acd8bcee4~mv2_d_1200_1200_s_2.png/v1/fill/w_117,h_117,al_c,q_85,usm_0.66_1.00_0.01/logo.webp'/>
          </Navbar.Brand>
          <NavDropdown id='language-selector-dropdown' title={<span className={classes.languageSelector}><FormattedMessage {...messages.languageSelector}/></span>}>
            <NavDropdown.Item href="/en"><FormattedMessage {...messages.languageSelectorEN}/></NavDropdown.Item>
            <NavDropdown.Item href="/nl"><FormattedMessage {...messages.languageSelectorNL}/></NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={['ml-auto', classes.navText]} activeKey={location.hash}>
              <Nav.Link href="/#home"><FormattedMessage {...messages.navBarHome}/></Nav.Link>
              <Nav.Link href="/#services"><FormattedMessage {...messages.navBarServices}/></Nav.Link>
              <Nav.Link href="/#our-work"><FormattedMessage {...messages.navBarOurWork}/></Nav.Link>
              <Nav.Link href="/#team"><FormattedMessage {...messages.navBarTeam}/></Nav.Link>
              <Nav.Link href="/#testimonials"><FormattedMessage {...messages.navBarTestimonials}/></Nav.Link>
              <Nav.Link href="/#about"><FormattedMessage {...messages.navBarAbout}/></Nav.Link>
              <Nav.Link href="/#contact"><FormattedMessage {...messages.navBarContact}/></Nav.Link>
              <Nav.Link href="/#careers"><FormattedMessage {...messages.navBarCareers}/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
};