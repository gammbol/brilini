import React from "react";
import logo from "../../images/logo.svg";
import {
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavLogoContainer,
  NavMenu,
} from "./NavBarElements";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogoContainer to="/">
          <NavLogo src={logo} alt="Logo" />
        </NavLogoContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="gallery">Gallery</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contacts">Contacts</NavLinks>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
