import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <div className="text-center">
          <p className="mb-0">Copyright © {currentYear} | All Reserved by Best Ecommerce</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
