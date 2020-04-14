import React from 'react';

import classes from './team.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function team() {
  return (
      <section id='team' className={classes.team}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2>Our Expert Team</h2>
          </div>
          <Row>
            <Col lg={6} sm={6} className='text-center'>
              <div className={classes.teamCard}>
                <img alt='Gabriel' className={classes.teamImg} src="https://static.wixstatic.com/media/68e9b9_07077d5bdde141d59b8fcaf85bff8d40~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22256423_10213076357396930_9078001381763.webp"/>
                <div className={classes.teamCaption}>
                  <h3>Gabriel Mattys</h3>
                  <p className={classes.positionTitle}>Business Developer</p>
                  <p>Gabriel is in charge of the customer relations and business development.</p>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={6} className='text-center'>
              <div className={classes.teamCard}>
                <img alt='Robin' className={classes.teamImg} src="https://static.wixstatic.com/media/68e9b9_afcc11c09c1747cb835ad4a2b59df3fb~mv2.jpg/v1/crop/x_0,y_17,w_375,h_375/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/robin.webp"/>
                <div className={classes.teamCaption}>
                  <h3>Robin Boudry</h3>
                  <p className={classes.positionTitle}>Data Analyst</p>
                  <p>Robin is the analytical guy, with a clear eye for detail. He is ready to help you automate your dull and and monotonous jobs.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default team;
