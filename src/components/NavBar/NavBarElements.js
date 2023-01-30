import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 25px 24px;
  max-width: 1600px;
`;

export const NavLogoContainer = styled(LinkR)`
  width: 145px;
  height: 63px;
`;

export const NavLogo = styled.img`
  height: 100%;
  width: 100%;
  color: #fff;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
`;

export const NavItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
`;
