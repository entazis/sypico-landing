import React from 'react';

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
                <li><a target="_blank" href=""><i
                    className="icofont-facebook"></i></a></li>
                <li><a target="_blank" href=""><i
                    className="icofont-twitter"></i></a></li>
                <li><a target="_blank" href=""><i
                    className="icofont-linkedin"></i></a></li>
                <li><a target="_blank" href=""><i
                    className="icofont-instagram"></i></a></li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <h3>Explore</h3>
              <ul className="list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#our-work">Our work</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6}>
              <h3>Quick Links</h3>
              <ul className="list">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/terms-conditions/">Terms &amp; Conditions</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6}>
              <h3>Get in Touch</h3>
              <ul className={classes.getInTouch}>
                <li><i className="icofont-home"></i> 2750 Quadra Street
                  Victoria, Canada.
                </li>
                <li><i className="icofont-live-support"></i> +324-9442-515</li>
                <li><i className="icofont-envelope"></i> hello@trynext.com</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className={classes.copyright}>
          <Container>
            <p>© Copyright 2020 Pungent. All Rights Reserved By <a target="_blank" href="https://envytheme.com">EnvyTheme</a>.</p>
          </Container>
        </div>
      </div>
  );
};

export default footer;