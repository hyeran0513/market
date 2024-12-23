import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div``;

const AboutInner = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1240px;
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutInner>
        <div>About</div>
      </AboutInner>
    </AboutWrapper>
  );
};

export default About;