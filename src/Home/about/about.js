import React from 'react';
import classes from './about.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';
import messages from '../../localization/en-base';

function about() {
  return (
      <section id='about' className={classes.about}>
        <Container>
          <Row>
            <Col lg={7} md={12}>
              <div className="about-content about-content-two pl-0 mt-0">
                <div className="section-title">
                  <h2><FormattedMessage {...messages.aboutTitle}/></h2>
                  <h4><FormattedMessage {...messages.aboutSubtitle}/></h4>
                </div>
                <div className="about-text">
                  <p><FormattedMessage {...messages.aboutP1}/></p>
                </div>
                <div className="about-text">
                  <p><FormattedMessage {...messages.aboutP2}/></p>
                </div>
                <div className="about-text">
                  <p><FormattedMessage {...messages.aboutP3}/></p>
                </div>
                <div className="about-text">
                  <p><FormattedMessage {...messages.aboutP4}/></p>
                </div>
                <div className="about-text">
                  <p><FormattedMessage {...messages.aboutP5}/></p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={12}>
              <div className="about-image right-image">
                <img
                  src="https://trynext-react.envytheme.com/_next/static/images/about-img3-83e6128966f2dea570c7aa47ddbf39e5.jpg"
                  alt="about" className="rounded-10"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default about;
