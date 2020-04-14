import React from 'react';

import classes from './about.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function about() {
  return (
      <section id='about' className={classes.about}>
        <Container>
          <Row>
            <Col lg={7} md={12}>
              <div className="about-content about-content-two pl-0 mt-0">
                <div className="section-title">
                  <h2>About Our Business</h2>
                  <h4>Automate, keep going and going!</h4>
                </div>
                <div className="about-text">
                  <p>Have you ever wondered how much time you waste on watching parameters several times a day to gather them into reports? Do you get any happier whilst processing data from multiple documents and trying your hardest to combine them in a clearly structured overview? Or even worse, how does it make you feel to browse the same web page over and over again?</p>
                </div>
                <div className="about-text"><h4>Our History</h4><p>But I must
                  explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth.</p></div>
                <div className="about-text"><h4>Our Mission</h4><p>At vero eos
                  et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa.</p></div>
              </div>
            </Col>
            <Col lg={5} md={12}>
              <div className="about-image right-image"><img
                  src="https://trynext-react.envytheme.com/_next/static/images/about-img3-83e6128966f2dea570c7aa47ddbf39e5.jpg"
                  alt="about" className="rounded-10"/>
                <div className="video-box">
                  <a className="video-btn" href="#"/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default about;
