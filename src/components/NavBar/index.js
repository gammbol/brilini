import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, x: -500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <NavLogoContainer to="/">
            <NavLogo src={logo} alt="Logo" />
          </NavLogoContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
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
        </motion.div>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
