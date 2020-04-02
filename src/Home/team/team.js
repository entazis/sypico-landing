import React from 'react';

import classes from './team.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function team() {
  return (
      <section className={classes.team}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2>Our Expert Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Row>
            <Col lg={4} sm={6}>
              <div className={classes.teamCard}>
                <div className={classes.teamImg}>
                  <img src="" alt="photo"/>
                </div>
                <div className={classes.teamCaption}>
                  <h3>Gabriel Mattys</h3>
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div className={classes.teamCard}>
                <div className={classes.teamImg}>
                  <img src="" alt="photo"/>
                </div>
                <div className={classes.teamCaption}>
                  <h3>Johnson Lee</h3>
                  <p>Backend Specialist</p>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 0 }} sm={{ span: 6, offset: 3 }} >
              <div className={classes.teamCard}>
                <div className={classes.teamImg}>
                  <img src="" alt="photo"/>
                </div>
                <div className={classes.teamCaption}>
                  <h3>Williams Smith</h3>
                  <p>Front-end Specialist</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default team;
