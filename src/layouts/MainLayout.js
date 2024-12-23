import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  padding: 1.5rem 0;
  flex: 1;
`;

const MainLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default MainLayout;