import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import classes from './banner.module.css';

function banner() {
  return (
      <div className={classes.banner}>
        <Container>
          <Row className='align-items-center'>
            <Col lg={6}>
              <div className={classes.coverText}>
                <h1>SyPiCo</h1>
                <p>Automate - Keep Going and Going!</p>
                <a className='btn btn-danger' href='#contact'>Get Started</a>
                <a className='btn btn-secondary' href='#our-work'>How it works</a>
              </div>
            </Col>
            <Col lg={6}>
              <iframe width='560' height='315'
                      title='Product Videó'
                      src='https://www.youtube.com/embed/5j0RfDY1Ob8'
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
