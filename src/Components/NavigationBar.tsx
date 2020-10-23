import React, { useState } from "react";
import {
  Collapse,



  Nav, Navbar,

  NavbarBrand, NavbarToggler,


  NavItem,
  NavLink
} from "reactstrap";

export default function NavigationBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Network Topology</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/devices/">
                Devices
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hello">
                Hello
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
