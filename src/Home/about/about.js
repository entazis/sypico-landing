import React from 'react';

import classes from './about.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function about() {
  return (
      <section className={classes.about}>
        <Container>
          <Row>
            <Col lg={7} md={12}>
              <div className="about-content about-content-two pl-0 mt-0">
                <div className="section-title"><h2>Why Choose Us</h2><p>Lorem
                  ipsum dolor sit amet, con se ctetur adipiscing elit. In
                  sagittis eg esta ante, sed viverra nunc tinci dunt nec elei
                  fend et tiram.</p></div>
                <div className="about-text"><h4>Who We Are</h4><p>Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.</p></div>
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
                  alt="image" className="rounded-10"/>
                <div className="video-box">
                  <a className="video-btn" href="#"></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default about;
