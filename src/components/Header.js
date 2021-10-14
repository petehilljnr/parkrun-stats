import React from "react";
import clientLogo from "../parkrun.png";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TitleBar = styled.span`
  margin-left: 1.5rem;
  font-size: 1.2rem;
  height: 80px;
  align-items: center;
  color: white;
  width: 100%;
`;

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            <img
              src={clientLogo}
              alt="Parkrun"
              height={45}
              style={{ transform: "rotate(90deg)" }}
            />
            <TitleBar>Bunch o' Stats for Dunedin Parkrun</TitleBar>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" style={{justifyContent: "flex-end"}}>
            <Nav>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/charts">Results Charts</Link>
              <Link className="nav-link" to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
