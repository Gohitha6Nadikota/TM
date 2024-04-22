import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { TravelContext } from "../../Context/TravelContext";
import { useContext } from "react";

const AppNavbar = () => {
  const { isAuthenticated, logout } = useContext(TravelContext);
  return (
    <Navbar bg="light" expand="md" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Travel Mate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            {isAuthenticated ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
