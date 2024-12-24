import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeWrapper = styled.div``;

const HomeInner = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1240px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeInner>
        <Link to="/product">상품 보기</Link>
      </HomeInner>
    </HomeWrapper>
  );
};

export default Home;
