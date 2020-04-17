import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHome, FaPhone, FaEnvelope } from 'react-icons/all';

import classes from './footer.module.css';
import {Container, Row, Col} from 'react-bootstrap';

const footer = () => {
  return (
      <div className={classes.footer}>
        <Container>
          <Row>
            <Col lg={3} sm={6}>
              <div className={classes.logo}>

              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className={classes.socialLinks}>
                <li className={classes.socialLink}>
                  <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/gabriel.mattys">
                    <div style={{color: 'white'}}>
                      <FaFacebook/>
                    </div>
                  </a>
                </li>
                <li className={classes.socialLink}>
                  <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/">
                    <div style={{color: 'white'}}>
                      <FaTwitter/>
                    </div>
                  </a></li>
                <li className={classes.socialLink}>
                  <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/gabriel-mattys/">
                    <div style={{color: 'white'}}>
                      <FaLinkedin/>
                    </div>
                  </a>
                </li>
                <li className={classes.socialLink}>
                  <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/">
                    <div style={{color: 'white'}}>
                      <FaInstagram/>
                    </div>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <h3>Explore</h3>
              <ul className={classes.linkList}>
                <li><a className={classes.link} href="#home">Home</a></li>
                <li><a className={classes.link} href="#about">About</a></li>
                <li><a className={classes.link} href="#services">Services</a></li>
                <li><a className={classes.link} href="#team">Team</a></li>
                <li><a className={classes.link} href="#our-work">Our work</a></li>
                <li><a className={classes.link} href="#testimonials">Testimonials</a></li>
                <li><a className={classes.link} href="#contact">Contact</a></li>
                <li><a className={classes.link} href="#careers">Careers</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6}>
              <h3>Quick Links</h3>
              <ul className={classes.linkList}>
                <li><a className={classes.link} href="#contact">Contact Us</a></li>
                <li><a className={classes.link} href="/privacy-policy/">Privacy Policy</a></li>
                <li><a className={classes.link} href="/terms-conditions/">Terms &amp; Conditions</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6}>
              <h3>Get in Touch</h3>
              <ul className={classes.getInTouch}>
                <li><FaHome/> Tramweglei 74, 2500 Lier</li>
                <li><FaPhone/> +324-9442-515</li>
                <li><a href='mailto:info@sipyco.com'><FaEnvelope/> info@sipyco.com</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default footer;