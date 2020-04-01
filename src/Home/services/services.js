import React from 'react';

import classes from './services.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function services() {
  return (
      <section className={[classes.services]}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <Row>
            <Col lg={4} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}/>
                <h3 ><a href="#" className={classes.serviceCardOneTitleLink}>IT Consultancy</a></h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>
            </Col>
            <Col lg={4} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}/>
                <h3><a href="#" className={classes.serviceCardOneTitleLink}>Web Development</a></h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>
            </Col>
            <Col lg={4} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}/>
                <h3><a href="#" className={classes.serviceCardOneTitleLink}>Digital marketing</a></h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default services;
