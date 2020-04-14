import React from 'react';

import classes from './our-work.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function ourWork() {
  return (
      <section id='our-work' className={classes.ourWork}>
        <Container>
          <Row>
            <Col lg={6}>
              <img alt='project' className={classes.leftImage} src={'https://trynext-react.envytheme.com/_next/static/images/it-service3-e0d514d60a8e95d29c308e081837482a.png'}/>
            </Col>
            <Col lg={6}>
              <div className={classes.infoBlock}>
                <div className={classes.infoHead}>
                  <h2 className="title">Digital Marketing</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris.</p></div>
              </div>
              <Row>
                <Col sm={6}>
                  <div className={classes.featureList}>
                    <i className='icofont-check-circled'/> SEO Marketing
                  </div>
                  <div className={classes.featureList}>
                    <i className='icofont-check-circled'/> Facebook Marketing
                  </div>
                  <div className={classes.featureList}>
                    <i className='icofont-check-circled'/> Social Marketing
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.featureList}>
                    <i className='icofont-check-circled'/> Email Marketing
                  </div>
                  <div className={classes.featureList}>
                    <i className='icofont-check-circled'/> Data Scraping
                  </div>
                  <div className={classes.featureList}>
                    <i className='icofont-check-circled'/> Youtube Marketing
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default ourWork;
