import React from 'react';

import classes from './careers.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

function careers() {
  return (
      <section className={classes.careers}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2>We're looking for new talent!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Row className="justify-content-md-center">
            <Col lg={4} sm={6}>
              <div className={classes.singleTable}>
                <div className={classes.tableHeader}><h3>Internship</h3></div>
                <div className={classes.tablePrice}><sup>$</sup>120 <sub>/ Day</sub></div>
                <ul className={classes.tableFeatures}>
                  <li><i className="icofont-check-circled">*</i> Web Development
                  </li>
                  <li><i className="icofont-check-circled">*</i> Email Integration
                  </li>
                  <li><i className="icofont-check-circled">*</i> Messenger
                    Integration
                  </li>
                  <li><i className="icofont-check-circled">*</i> Mobile + Desktop
                    Apps
                  </li>
                  <li><i className="icofont-check-circled">*</i> Quick Responses
                  </li>
                  <li><i className="icofont-check-circled">*</i> Drag &amp; Drop
                    Widgets
                  </li>
                  <li><i className="icofont-check-circled">*</i> Visitor Notes
                  </li>
                  <li><i className="icofont-check-circled">*</i> Google Analytics
                  </li>
                </ul>
                <div className="btn-box">
                  <Button variant='danger'>Apply job</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default careers;
