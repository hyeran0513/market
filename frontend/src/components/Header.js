import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearch, BiHeart, BiShoppingBag, BiSun, BiUser } from "react-icons/bi";

const HeaderWrapper = styled.header`
  height: 100px;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1240px;
  height: 100%;
`;

const Logo = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
`;

const Utillity = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo to="/">hrkim's toy project</Logo>

        <Utillity>
          <button type="button">
            <BiHeart  />
          </button>

          <button type="button">
            <BiShoppingBag />
          </button>

          <button type="button">
            <BiUser />
          </button>

          <button type="button">
            <BiSun />
          </button>
        </Utillity>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;