import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";

const NavBar = (props) => {
  return (
    <>
      <Navbar
        bg="black"
        data-bs-theme="dark"
        style={{ borderBottom: "1px solid white" }} sticky="top"
      >
        <Container>
          <Nav className="justify-content-center">
            <Navbar.Brand href="#home" className="px-4">
              HOME
            </Navbar.Brand>
            <Navbar.Brand href="#store" className="px-4">
              STORE
            </Navbar.Brand>
            <Navbar.Brand href="#about" className="px-4">
              ABOUT
            </Navbar.Brand>
          </Nav>
          <Cart onClick={props.onClick} />
        </Container>
      </Navbar>
      <Header/>
    </>
  );
};

export default NavBar;
