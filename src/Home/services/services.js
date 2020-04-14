import React from 'react';
import { GoDatabase, IoMdAnalytics } from 'react-icons/all';

import classes from './services.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function services() {
  return (
      <section id='services' className={[classes.services]}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2>SyPiCo Services</h2>
            <p>Ready to get back on track and let us take care of the rest? Give us a call today and we’ll be happy to discuss where we can be of added value to you.</p>
          </div>
          <Row>
            <Col lg={6} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}><GoDatabase/></i>
                <h3 className={classes.serviceCardOneTitleLink}>Data Gathering and Aggregation</h3>
                <p>Our insights and skills combined enable us to transform your data gathering and strategies into efficient processes. We’re ready to help you automate these burdensome tasks and reduce the workload this would otherwise mean for you employees. The same work that would make them demotivated we can do in a continuous and timely manner.</p>
              </div>
            </Col>
            <Col lg={6} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}><IoMdAnalytics/></i>
                <h3 className={classes.serviceCardOneTitleLink}>Data Analytics</h3>
                <p>Need new insights or a fresh view on your big data? Let us guide you.
                  Any organization can move forward with small incremental changes, but building for the future in today’s rapidly evolving environment means taking bold chances and making insightful decisions.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default services;
