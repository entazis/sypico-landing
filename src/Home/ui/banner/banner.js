import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './banner.module.css';
import messages from '../../../localization/en-base';
import {FormattedMessage} from 'react-intl';

function banner() {
  return (
      <div className={classes.banner}>
        <Container>
          <Row className='align-items-center'>
            <Col lg={6}>
              <div className={classes.coverText}>
                <h1>SyPiCo</h1>
                <p><FormattedMessage {...messages.bannerSubtitle}/></p>
                <a className='btn btn-primary' href='#contact'><FormattedMessage {...messages.bannerGetStarted}/></a>
                <a className='btn btn-secondary' href='#our-work'><FormattedMessage {...messages.bannerHowItWorks}/></a>
              </div>
            </Col>
            <Col lg={6}>
              <iframe width='560' height='315'
                      title='SyPiCo services - video'
                      src='https://www.youtube.com/embed/Vs9k3FThNic'
                      frameBorder='0'
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen/>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default banner;
