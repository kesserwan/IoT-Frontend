import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  CustomInput,
} from "reactstrap";

interface NavigationProps {
  activeTheme: any;
  onThemeChange: Function
}

export default function NavigationBar(props: NavigationProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    if(props.activeTheme === "light"){
      props.onThemeChange("dark");
    }else{
      props.onThemeChange("light");
    }
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Network Topology</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="/devicepage/">
                Devices
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/gatewaypage/">
                Gateways
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/data/">
                Data
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/helppage/">
                Help
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <CustomInput type="switch" id="darkMode" label="Dark Mode" onChange={toggleDarkMode} checked={props.activeTheme === "dark" } />

      </Navbar>
    </div>
  );
}
