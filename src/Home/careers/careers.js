import React from 'react';
import classes from './careers.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { FaCheckDouble } from 'react-icons/all';
import messages from '../../localization/en-base';
import {FormattedMessage} from 'react-intl';

function careers() {
  return (
      <section id='careers' className={classes.careers}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2><FormattedMessage {...messages.careersTitle}/></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Row className="justify-content-md-center">
            <Col lg={5} sm={6}>
              <div className={classes.singleTable}>
                <div className={classes.tableHeader}><FormattedMessage {...messages.careersInternship}/></div>
                <h6 className={classes.tablePrice}><FormattedMessage {...messages.careersSoftwareDeveloper}/></h6>
                <ul className={classes.tableFeatures}>
                  <li><FaCheckDouble/> Web Development</li>
                  <li><FaCheckDouble/> Email Integration</li>
                  <li><FaCheckDouble/> Messenger Integration</li>
                  <li><FaCheckDouble/> Mobile + Desktop Apps</li>
                  <li><FaCheckDouble/> Quick Responses</li>
                  <li><FaCheckDouble/> Drag &amp; Drop Widgets</li>
                  <li><FaCheckDouble/> Visitor Notes</li>
                  <li><FaCheckDouble/> Google Analytics</li>
                </ul>
                <div className="btn-box text-center">
                  <Button variant='primary'>Apply job</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default careers;
