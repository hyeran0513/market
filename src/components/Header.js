import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSolidSun, BiSolidUser } from "react-icons/bi";

const HeaderWrapper = styled.header`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.headerBg};
`;

const HeaderInner = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1240px;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 15px;
`;

const NavLink = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Utillity = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>
          <h1>Toy Project</h1>
        </Logo>

        <Navigation>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
          </NavList>
        </Navigation>

        <Utillity>
          <button type="button">
            <BiSolidSun />
          </button>

          <button type="button">
            <BiSolidUser />
          </button>
        </Utillity>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;