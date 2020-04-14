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
                <div className="about-text">
                  <p>These tasks may be very crucial to your business but nevertheless we all know that they are not the most satisfying.</p>
                </div>
                <div className="about-text">
                  <p>I remember my starting job as a Tax Consultant. One of my first projects required me to perform some benchmark analyses. In part of this process it was my job to research the web in order to datamine the needed information. Unfortunately for me this was just a fancy way of saying that I had to click on 200 websites to find one certain parameter. Needless to say this job did not make feel satisfied at all. I knew I was contributing to our project but that didn’t make me feel any more valuable or happy.</p>
                </div>
                <div className="about-text">
                  <p>This is exactly where we, at SyPiCo, step in. We can help you to collect your needed information and to organize and analyze these date. After all, we’d love to make sure you could go to bed feeling all happy and satisfied. All you have to do is to get in touch with us and let our automation processes do the rest.</p>
                </div>
                <div className="about-text">
                  <p>At SyPiCo we want to keep high achievers as yourself motivated. We allow you to hand over your most boring and repetitive tasks, as we make sure that automation takes over. With our knowledge and software we can solve even the most complex issues of your organization.</p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={12}>
              <div className="about-image right-image">
                <img
                  src="https://trynext-react.envytheme.com/_next/static/images/about-img3-83e6128966f2dea570c7aa47ddbf39e5.jpg"
                  alt="about" className="rounded-10"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default about;
