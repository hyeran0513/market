import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSolidHeart, BiHeart } from "react-icons/bi";

const ProductThumbnail = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.3;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity ease .3s;
  }
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

const ProductArrivalDate = styled.div`
  font-size: 0.8rem;
`;

const BtnLike = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  pointer-events: auto;
  border: 1px solid hsla(0, 0%, 100%, .4);
  background: hsla(0, 0%, 100%, 0.1);
  color: #fff;
  opacity: 0;
  transition: opacity ease .3s, border ease .3s;

  &:hover {
    border: 1px solid #fff;
  }

  svg {
    font-size: 18px;
  }
`;

const CardItem = styled(Link)`
  position: relative;
  cursor: pointer;

  &:hover {
    ${ProductName} {
      text-decoration: underline;
    }

    ${ProductThumbnail} {
      &::before {
        opacity: 1;
      }
    }

    ${BtnLike} {
      opacity: 1;
    }
  }
`;

const Card = ({
  productName,
  productPrice,
  productArrivalDate,
  thumbnail,
  productId,
}) => {
  return (
    <CardItem to={`/detail?productId=${productId}`}>
      <BtnLike type="button">
        <BiSolidHeart />
      </BtnLike>

      <ProductThumbnail>
        <ProductThumbnailImg
          src={`${process.env.PUBLIC_URL}/images/bg/${thumbnail}`}
          alt={productName}
        />
      </ProductThumbnail>

      <ProductInfo>
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
        <ProductArrivalDate>{productArrivalDate}</ProductArrivalDate>
      </ProductInfo>
    </CardItem>
  );
};

export default Card;