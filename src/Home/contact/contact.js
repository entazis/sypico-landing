import React from 'react';

import classes from './contact.module.css';
import {Container} from 'react-bootstrap';

function contact() {
  return (
      <section className={classes.contact}>
        <Container>
          <div className={classes.contactInnerArea}>
            <h2>Contact Us</h2>
            <form className="newsletter-form">
              <input type="email"
                     className="form-control"
                     placeholder="Enter your email"
                     name="email" required=""/>
                <button className={classes.formSubmissionButton} type="submit">Subscribe!</button>
            </form>
          </div>
        </Container>
      </section>
);
}

export default contact;
