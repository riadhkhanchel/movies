import React from "react";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar className ="NavBar">
        <Navbar.Brand href="#home">Movies </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Riadh Khanchel</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
