import React from 'react';

import classes from './contact.module.css';
import {Container, Row, Col} from 'react-bootstrap';

function contact() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.message.value);
  };

  return (
      <section id='contact' className={classes.contact}>
        <Container>
          <div className={classes.contactInnerArea}>
            <h2>Contact Us</h2>
            <form onSubmit={handleFormSubmit}>
              <Container>
                <Row className='mb-3'>
                  <Col md={6}>
                    <label>Name</label>
                    <input name='name' type='text' className='form-control' />
                  </Col>
                  <Col md={6}>
                    <label>Email</label>
                    <input name='email' type='text' className='form-control' />
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col>
                    <label>Message</label>
                    <textarea name='message' className='form-control' rows='5'/>
                  </Col>
                </Row>
                <button type='submit' className='btn btn-danger'>Submit</button>
              </Container>
            </form>
          </div>
        </Container>
      </section>
  );
}

export default contact;
