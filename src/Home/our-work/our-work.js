import React from 'react';

import classes from './our-work.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function ourWork() {
  return (
      <section className={classes.ourWork}>
        <Container>
          <Row>
            <Col lg={6}>
              <img className={classes.leftImage}/>
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
                <Col sm={6}></Col>
                <Col sm={6}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default ourWork;
