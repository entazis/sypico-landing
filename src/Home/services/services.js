import React from 'react';

import classes from './services.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function services() {
  return (
      <section className={[classes.services]}>
        <Container>
          <div className={classes.sectionTitle}>
            <h2>SyPiCo Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <Row>
            <Col lg={4} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}/>
                <h3 ><a href="#" className={classes.serviceCardOneTitleLink}>Data Gathering and Aggregation</a></h3>
                <p>Our insights and skills combined enable us to transform your data gathering and strategies into efficient processes. We’re ready to help you automate these burdensome tasks and reduce the workload this would otherwise mean for you employees. The same work that would make them demotivated we can do in a continuous and timely manner.</p>
              </div>
            </Col>
            <Col lg={4} sd={6}>
              <div className={classes.serviceCardOne}>
                <i className={classes.serviceCardOneIcon}/>
                <h3><a href="#" className={classes.serviceCardOneTitleLink}>Data Analytics</a></h3>
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
