import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearch, BiHeart, BiShoppingBag, BiSun, BiUser } from "react-icons/bi";

const HeaderWrapper = styled.header`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.headerBg};
`;

const HeaderInner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
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

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 400px;
  height: 40px;
  border: 1px solid black;
  border-radius: 30px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
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
        <Logo to="/">Toy Project</Logo>

        <Search>
          <SearchInput placeholder="원하시는 상품을 입력해 주세요." />
          <BiSearch />
        </Search>

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