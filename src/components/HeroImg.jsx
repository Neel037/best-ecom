import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/Images/hero-img.png';
import '../assets/css/HeroImg.css';

const HeroImg = () => {

  return (
    <div className="hero-img-container" id='home'>
      <Container fluid>
        <Row>
          <Col>
            <img src={img1} alt="Hero" className="hero-img" />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default HeroImg;
