import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const GlobalNav = styled.div`
  display: block;
`;
const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
  width: 100vw;
  background-color: #e3e6f3;
  box-shadow: 0 5px 15px rgba(0, 0, 0.06);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: 1024px) {
    padding: 0 2px;
  }
`;
const Image = styled.div`
  padding: 2rem;
`;
const NavItem = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media screen and (max-width: 1024px) {
    padding: 1px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const NavLinks = styled(Link)`
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  color: grey;
  font-weight: 600;
  &:hover {
    color: green;
    transition: all 0.3s ease-in;
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;
const MobileHamburger = styled.div`
  padding-right: 2rem;
  font-size: 2.5rem;
  display: none;
  @media screen and (max-width: 600px) {
    display: inline-block;
  }
`;
const MobileNav = styled.div`
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #cacece;
  z-index: 10;
  display: none;

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.clicked ? "none" : "block")};
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 7rem;
  }
`;
const MobileNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MobileNavLinks = styled(Link)`
  padding: 15px;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;

  &:hover {
    color: white;
    transition: all 0.2s ease-in;
    text-decoration: underline;
  }
`;
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <GlobalNav>
      <MainNav>
        <Image>
          <img src="/images/logo.png" alt="Logo" />
        </Image>
        <NavItem>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/shop">Shop</NavLinks>
          <NavLinks to="/blog">Blog</NavLinks>
          <NavLinks to="/about">About</NavLinks>
          <NavLinks to="/contact">Contact</NavLinks>
          <NavLinks to="/cart">
            <i class="fa-solid fa-bag-shopping" />
          </NavLinks>
        </NavItem>
        <MobileHamburger onClick={handleClicked}>
          {clicked ? (
            <i class="fa-solid fa-bars" />
          ) : (
            <i class="fa-solid fa-xmark" />
          )}
        </MobileHamburger>
      </MainNav>
      <MobileNav clicked={clicked}>
        <MobileNavItem>
          <MobileNavLinks to="/">Home</MobileNavLinks>
          <MobileNavLinks to="/shop">Shop</MobileNavLinks>
          <MobileNavLinks to="/blog">Blog</MobileNavLinks>
          <MobileNavLinks to="/about">About</MobileNavLinks>
          <MobileNavLinks to="/contact">Contact</MobileNavLinks>
          <MobileNavLinks to="/cart">
            <i class="fa-solid fa-bag-shopping" />
          </MobileNavLinks>
        </MobileNavItem>
      </MobileNav>
    </GlobalNav>
  );
};
export default Navbar;
