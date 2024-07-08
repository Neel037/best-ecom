import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container" id='contact'>
      <Container>
        <Row>
          <Col md={6} className="contact-info">
            <h2>Best Ecommerce</h2>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 West Shewrapara, Mirpur, Dhaka 1216</p>
            <p><FontAwesomeIcon icon={faPhone} /> +880 1521 494008</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> hello@bestecom.com</p>
          </Col>
          <Col md={6}>
            <h2>Contact Us</h2>
            <Form action="https://formspree.io/f/xqkrogpy"method="POST">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name='name'/>
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name='email'/>
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message"/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
