import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from './Logout';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">DevDesk</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Logout />
          </Nav>
        </Collapse>
      </Navbar>

  );
};

export default NavBar;
