import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import blackShirt from "../assets/images/bg/bg_black_shirt.jpg";

const ProductInfo = styled.div`
  display: flex;
  gap: 3rem;
`;

const ProductThumbnail = styled.div`
  width: 40%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetails = styled.div`

`;

const ProductName= styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const ProductInfoList = styled.div`

`;

const ProductDetail = () => {
  return (
    <div>
      <Link to="/product">목록으로</Link>

      <ProductInfo>
        <ProductThumbnail>
          <img src={blackShirt} alt="" />
        </ProductThumbnail>

        <ProductDetails>
          <ProductName>고양이 밥 먹어</ProductName>
          <ProductInfoList>배송 정보 내일 수까지 배송</ProductInfoList>
          <ProductInfoList>색상</ProductInfoList>
          <ProductInfoList>사이즈</ProductInfoList>

          <div>총 결제금액</div>
          <div>
            <button type="button">장바구니</button>
            <button type="button">구매하기</button>
          </div>
        </ProductDetails>
      </ProductInfo>
    </div>
  )
}

export default ProductDetail