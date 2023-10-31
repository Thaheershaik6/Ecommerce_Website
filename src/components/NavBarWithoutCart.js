import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import Header from "./Header/Header";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/home" className="px-4" style={{color: 'white', textDecoration: 'none', fontSize: '25px'}}>
              HOME
            </NavLink>
            <NavLink to="/store" className="px-4" style={{color: 'white', textDecoration: 'none', fontSize: '25px'}}>
              STORE
            </NavLink>
            <NavLink to="/about" className="px-4" style={{color: 'white', textDecoration: 'none', fontSize: '25px'}}>
              ABOUT
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Header/>
    </>
  );
};

export default NavBarWithoutCart;
