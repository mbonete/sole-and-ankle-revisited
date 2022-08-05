import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

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
          <NavIcons>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open Cart</VisuallyHidden>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
            <HamburguerButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" />
            </HamburguerButton>
            <VisuallyHidden>Menu</VisuallyHidden>
          </NavIcons>
        </Side>
      </MainHeader>
      

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;
	
  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    5.4vw - 2rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }

`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    &:last-of-type{
      display: flex;
      justify-content: flex-end;
      align-self: center;
    }
  }
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
const NavIcons = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    height: 100%;
    gap: 40px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 24px;
    height: 100%;
  }
`;

const HamburguerButton = styled.button`
  border: transparent;
  background-color: transparent;
`;

export default Header;
