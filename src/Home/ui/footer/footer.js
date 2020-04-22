import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHome, FaPhone, FaEnvelope } from 'react-icons/all';
import classes from './footer.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import messages from '../../../localization/en-base';
import {FormattedMessage} from 'react-intl';

const footer = () => {
  return (
      <div className={classes.footer}>
        <Container>
          <Row>
            <Col lg={3} sm={6} className='py-2'>
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
            <Col lg={3} md={6} sm={6} className='py-2'>
              <h6>Explore</h6>
              <ul className={classes.linkList}>
                <li><a className={classes.link} href="#home"><FormattedMessage {...messages.navBarHome}/></a></li>
                <li><a className={classes.link} href="#about"><FormattedMessage {...messages.navBarAbout}/></a></li>
                <li><a className={classes.link} href="#services"><FormattedMessage {...messages.navBarServices}/></a></li>
                <li><a className={classes.link} href="#team"><FormattedMessage {...messages.navBarTeam}/></a></li>
                <li><a className={classes.link} href="#our-work"><FormattedMessage {...messages.navBarOurWork}/></a></li>
                <li><a className={classes.link} href="#testimonials"><FormattedMessage {...messages.navBarTestimonials}/></a></li>
                <li><a className={classes.link} href="#contact"><FormattedMessage {...messages.navBarContact}/></a></li>
                <li><a className={classes.link} href="#careers"><FormattedMessage {...messages.navBarCareers}/></a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6} className='py-2'>
              <h6>Quick Links</h6>
              <ul className={classes.linkList}>
                <li><a className={classes.link} href="#contact"><FormattedMessage {...messages.footerContactUs}/></a></li>
                <li><a className={classes.link} href="/privacy-policy/"><FormattedMessage {...messages.footerPrivacyPolicy}/></a></li>
                <li><a className={classes.link} href="/terms-conditions/"><FormattedMessage {...messages.footerTermsAndConditions}/></a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6} className='py-2'>
              <h6>Get in Touch</h6>
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