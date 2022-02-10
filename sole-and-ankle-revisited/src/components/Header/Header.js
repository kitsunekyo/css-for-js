import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS, COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <a href="#">
              <Icon id="shopping-bag" />
            </a>
            <a href="#">
              <Icon id="search" />
            </a>
            <IconButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" />
            </IconButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const IconButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
`

const MobileNav = styled.div`
  display: none;
  gap: 1.25rem;
  justify-content: flex-end;

  a {
    color: inherit;
  }

  @media (${BREAKPOINTS.tabletAndSmaller}) {
    display: flex;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media (${BREAKPOINTS.tabletAndSmaller}) {
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(.5rem, 3vw, 3rem);
  margin: 0px 48px;

  @media (${BREAKPOINTS.tabletAndSmaller}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
