import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = {
    textDecoration: "none",
    color: "#333",
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  };

  const navBrandStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  return (
    <>
      <Container fluid className="py-5">
        <Container>
          <Navbar expand="lg" bg="light">
            <Navbar.Brand style={navBrandStyles}>
              <NavLink to="/" style={navLinkStyles}>
                React Bootstrap
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link>
                  <NavLink to="/" style={navLinkStyles}>
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/About" style={navLinkStyles}>
                    About
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/Contact" style={navLinkStyles}>
                    Contact
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/Car" style={navLinkStyles}>
                    Career
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </>
  );
};

export default Header;
