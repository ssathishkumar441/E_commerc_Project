import React from "react";
import { Card, Container } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-primary">
            <span>
              <i className="bi bi-shop"></i> SS Food Shop
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#Menu" className="fw-bold">
              Menu
            </Nav.Link>
            <Nav.Link href="#MustTry" className="fw-bold">
              Must Try
            </Nav.Link>
            <Nav.Link href="#Contact" className="fw-bold">
              Contact Us
            </Nav.Link>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
