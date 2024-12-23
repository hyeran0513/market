import React from "react";
import styled from "styled-components";
import cat from "../assets/images/bg/bg_cat.jpg";

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
        <div>Home</div>
        <img src={cat} alt="cat" />
      </HomeInner>
    </HomeWrapper>
  );
};

export default Home;
