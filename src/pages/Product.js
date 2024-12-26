import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import catImage from "../assets/images/bg/bg_cat.jpg";

const ProductWrapper = styled.div``;

const ProductType = styled.div`
  margin-bottom: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SearchUtility = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;

const Product = () => {
  const items = [
    {
    productId: "p12345",
    productName: "테스트",
    productPrice: "5000",
    arrivalDate: "2024.12.27",
    thumbnail: catImage
    }
  ];

  return (
    <ProductWrapper>
      <ProductType>티셔츠</ProductType>

      <SearchUtility>
        <select>
          <option>낮은 가격순</option>
          <option>높은 가격순</option>
          <option>판매량순</option>
          <option>최신순</option>
        </select>
      </SearchUtility>

      <CardWrapper>
        {items.map((item, index) => (
          <Card
            key={index}
            productName={item.productName}
            productPrice={item.productPrice}
            productArrivalDate={item.arrivalDate}
            thumbnail={item.thumbnail}
            productId={item.productId}
          />
        ))}
      </CardWrapper>
    </ProductWrapper>
  );
};

export default Product;