// Navbar.tsx
import React from "react";
import { Navbar as BootstrapNavbar, Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar variant="dark" expand="lg" fixed="top">
      <BootstrapNavbar.Brand as={Link} to="/">
        Story Safari
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
      <BootstrapNavbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            Sign In
          </Nav.Link>
        </Nav>
        <Form className="d-flex form align-end">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="search" variant="outline-light">Search</Button>
        </Form>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
