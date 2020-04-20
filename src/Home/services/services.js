import React from 'react';
import { GoDatabase, IoMdAnalytics } from 'react-icons/all';
import classes from './services.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import messages from '../../localization/en-base';
import {FormattedMessage} from 'react-intl';

function services() {
  return (
      <section id='services' className={[classes.services]}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2><FormattedMessage {...messages.servicesTitle}/></h2>
            <p><FormattedMessage {...messages.servicesSubtitle}/></p>
          </div>
          <Row>
            <Col lg={6} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}><GoDatabase/></i>
                <h3 className={classes.serviceCardOneTitleLink}><FormattedMessage {...messages.servicesServiceDataGatheringTitle}/></h3>
                <p><FormattedMessage {...messages.servicesServiceDataGatheringDescription}/></p>
              </div>
            </Col>
            <Col lg={6} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}><IoMdAnalytics/></i>
                <h3 className={classes.serviceCardOneTitleLink}><FormattedMessage {...messages.servicesDataAnalyticsTitle}/></h3>
                <p><FormattedMessage {...messages.servicesDataAnalyticsDescription}/></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default services;
