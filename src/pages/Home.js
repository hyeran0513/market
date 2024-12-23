import React from "react";
import styled from "styled-components";

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
      </HomeInner>
    </HomeWrapper>
  );
};

export default Home;