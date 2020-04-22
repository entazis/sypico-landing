import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import { FaRegCheckCircle } from 'react-icons/all';
import classes from './our-work.module.css';
import {FormattedMessage} from 'react-intl';
import messages from '../../localization/en-base';

function ourWork() {
  return (
      <section id='our-work' className={classes.ourWork}>
        <div className={classes.sectionTitle}>
          <h2><FormattedMessage {...messages.ourWorkTitle}/></h2>
          <p><FormattedMessage {...messages.ourWorkSubtitle}/></p>
          <a className="btn btn-primary" href="#contact"><FormattedMessage {...messages.ourWorkGetInTouch}/></a>
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
                      <h2 className="title"><FormattedMessage {...messages.ourWorkDataAnalyticsTitle}/></h2>
                      <p><FormattedMessage {...messages.ourWorkDataAnalyticsDescription}/></p>
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
                      <h2 className="title"><FormattedMessage {...messages.ourWorkAutomationToolTitle}/></h2>
                      <p><FormattedMessage {...messages.ourWorkAutomationToolDescription}/></p>
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
