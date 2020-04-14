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
                <a className="btn btn-primary" href="/contact/">Get Started</a>
                <a className="btn btn-secondary" href="#play-video">How it works</a>
              </div>
            </Col>
            <Col lg={6}>
              <img className={classes.bannerImage} alt={'SyPiCo'}
                   src={'https://trynext-react.envytheme.com/_next/static/images/animate-banner-img1-6ff206b3106cc8caa8ffe8c01ff8ba44.jpg'}/>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default banner;
