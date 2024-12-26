import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductThumbnail = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

const ProductThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ProductName = styled.div`
  font-size: 0.8rem;
  -webkit-text-decoration: underline transparent;
  text-decoration: underline transparent;
  text-overflow: ellipsis;
  text-underline-offset: 0.2rem;
  transition: text-decoration 0.5s ease;
`;

const ProductPrice = styled.div`
  color: ${({ theme }) => theme.colors.point};
  font-weight: bold;
`;

const productArrivalDate = styled.div`
  font-size: 0.8rem;
`;

const CardItem = styled(Link)`
  cursor: pointer;

  &:hover {
    ${ProductThumbnailImg} {
      transform: scale(1.2);
    }

    ${ProductName} {
      text-decoration: underline;
    }
  }
`;

const Card = ({ productName, productPrice, productArrivalDate, thumbnail, productId }) => {
  return (
    <CardItem to={`/detail?productId=${productId}`}>
      <ProductThumbnail>
        <ProductThumbnailImg src={thumbnail} alt={productName} />
      </ProductThumbnail>

      <ProductInfo>
      <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
        <productArrivalDate>{productArrivalDate}</productArrivalDate>
      </ProductInfo>
    </CardItem>
  );
};

export default Card;