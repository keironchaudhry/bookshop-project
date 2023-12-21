import React from "react";
import { Navbar as BootstrapNavbar, Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/storysafari.png";
import { useCurrentUser } from "../context/CurrentUserContext";

const Navbar: React.FC = () => {
  const { currentUser } = useCurrentUser();

  function refreshPage() {
    window.location.reload();
  }

  return (
    <BootstrapNavbar variant="dark" expand="lg" fixed="top">
      <BootstrapNavbar.Brand as={Link} to="/">
        <img src={logo} alt="Story Safari Logo" className="logo-img" />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
      <BootstrapNavbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {currentUser ? (
            <>
              <Nav.Link as={Link} to="#" onClick={refreshPage}>
                Logout
              </Nav.Link>
              <Nav.Link as={Link} to="/basket">
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          )}
        </Nav>
        <Form className="d-flex form align-end">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="search" variant="outline-light">
            Search
          </Button>
        </Form>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
