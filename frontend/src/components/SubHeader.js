import React from 'react'
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom';

const SubHeaderWrapper = styled.div`
  height: 50px;
`;

const SubHeaderInner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1240px;
  height: 100%;
`;

const BtnHambuger = styled.div`
  display: inline-block;
`;

const Gnb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const GnbItem = styled.div`
`;

const Utility = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const UtilityItem = styled.div`
`;

const SubHeader = () => {
  return (
    <SubHeaderWrapper>
      <SubHeaderInner>
        <BtnHambuger type="button"><BiMenu /></BtnHambuger>

        <Gnb>
          <GnbItem>
            <Link to="/product">베스트</Link>
          </GnbItem>

          <GnbItem>
            <Link to="/product">신상</Link>
          </GnbItem>

          <GnbItem>
            <Link to="/product">아우터</Link>
          </GnbItem>

          <GnbItem>
            <Link to="/product">상의</Link>
          </GnbItem>

          <GnbItem>
            <Link to="/product">바지</Link>
          </GnbItem>

          <GnbItem>
            <Link to="/product">원피스/스커트</Link>
          </GnbItem>

          <GnbItem>
            <Link to="/product">가방</Link>
          </GnbItem>
        </Gnb>

        <Utility>
          <UtilityItem>
            <button type="button">로그인</button>
          </UtilityItem>
        </Utility>
      </SubHeaderInner>
    </SubHeaderWrapper>
  )
}

export default SubHeader