import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbr = ({ categories, onSelectCategory }) => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand><h3>Our Products Categories</h3></Navbar.Brand>
      <Nav className="me-auto p-3">
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          {categories.map((category, index) => (
            <NavDropdown.Item key={index} onClick={() => onSelectCategory(category)}>
              {category}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
  );
};

export default Navbr;
