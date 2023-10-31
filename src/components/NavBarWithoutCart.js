import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import Header from "./Header/Header";

const NavBarWithoutCart = () => {
  return (
    <>
      <Navbar
        bg="black"
        data-bs-theme="dark"
        style={{ borderBottom: "1px solid white" }} sticky="top"
      >
        <Container>
          <Nav className="justify-content-center">
            <Navbar.Brand href="/home" className="px-4">
              HOME
            </Navbar.Brand>
            <Navbar.Brand href="#store" className="px-4">
              STORE
            </Navbar.Brand>
            <Navbar.Brand href="/about" className="px-4">
              ABOUT
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <Header/>
    </>
  );
};

export default NavBarWithoutCart;
