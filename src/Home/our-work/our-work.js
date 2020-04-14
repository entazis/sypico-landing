import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import { FaRegCheckCircle } from 'react-icons/all';

import classes from './our-work.module.css';

function ourWork() {
  return (
      <section id='our-work' className={classes.ourWork}>
        <div className={classes.sectionTitle}>
          <h2>Our Projects</h2>
          <p>We help businesses automate boring repetitive tasks!</p>
          <a className="btn btn-danger" href="#contact">Get In Touch</a>
        </div>
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={6}>
                  <img alt='project' className={classes.leftImage} src={'https://trynext-react.envytheme.com/_next/static/images/it-service3-e0d514d60a8e95d29c308e081837482a.png'}/>
                </Col>
                <Col lg={6}>
                  <div className={classes.infoBlock}>
                    <div className={classes.infoHead}>
                      <h2 className="title">Data Analytics</h2>
                      <p>It became clear that price setting in the house renting business is crucial but also rather complex as it is very dependent on season and events.
                        We took it upon us to crunch the numbers and analyze their data in detail. Our Data Analytics resulted in a revenue increase of 10%.</p>
                    </div>
                  </div>
                  <Row>
                    <Col sm={6}>
                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> Airbnb
                      </div>
                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> Data Analytics
                      </div>

                    </Col>
                    <Col sm={6}>
                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> Setting Prices
                      </div>
                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> Increase in revenue
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={6}>
                  <div className={classes.infoBlock}>
                    <div className={classes.infoHead}>
                      <h2 className="title">Automation tool</h2>
                      <p>Master-planning list is automatically updated every five minutes. Thanks to SyPiCo no more precious time is wasted and resources are used much more efficiently.</p>
                    </div>
                  </div>
                  <Row>
                    <Col sm={6}>

                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> Mobile App Development
                      </div>
                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> React Web Development
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> UI / UX Design
                      </div>
                      <div className={classes.featureList}>
                        <FaRegCheckCircle/> Responsive Design
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <img alt='project' className={classes.leftImage} src={'https://trynext-react.envytheme.com/_next/static/images/it-service1-22e4b3cb0d0c5e883d34ab51829a8cca.png'}/>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </section>
  );
}

export default ourWork;
