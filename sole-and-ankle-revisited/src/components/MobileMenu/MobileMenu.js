/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS} from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Wrapper>
        <MenuActions>
          <IconButton onClick={onDismiss}>
            <Icon id="close" />
          </IconButton>
        </MenuActions>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Wrapper>
    </Overlay>
  );
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const FooterLink = styled.a`
  font-size: .8rem;
  padding: 7px 0;
  text-decoration: none;
  color: ${COLORS.gray[700]}
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  padding: 11px 0;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MenuActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconButton = styled.button`
  margin-left: auto;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
`

const Overlay = styled.div`
  background-color: hsla(0deg 0% 0% / 0.5);
  position: fixed;
  inset: 0;
  z-index: 100;
`;

const Wrapper = styled.aside`
  background-color: ${COLORS.white};
  height: 100%;
  position: absolute;
  width: 80%;
  right: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export default MobileMenu;
