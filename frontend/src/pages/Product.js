import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import catImage from '../assets/images/bg/bg_cat.jpg';
import { useQuery } from 'react-query';

const fetchProducts = async () => {
  const response = await fetch('http://localhost:5000/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

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
  const { data, isLoading, error } = useQuery('products', fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const productDataArray = [
    {
      productId: 1,
      productName: "고양이 전용 밥",
      productPrice: "7,850원",
      productArrivalInfo: "내일(수) 도착 보장",
      thumbnail: catImage,
    },
    {
      productId: 2,
      productName: "강아지 전용 간식",
      productPrice: "3,000원",
      productArrivalInfo: "모레(목) 도착 보장",
      thumbnail: catImage,
    },
    {
      productId: 3,
      productName: "고양이 전용 밥",
      productPrice: "7,850원",
      productArrivalInfo: "내일(수) 도착 보장",
      thumbnail: catImage,
    },
    {
      productId: 4,
      productName: "강아지 전용 간식",
      productPrice: "3,000원",
      productArrivalInfo: "모레(목) 도착 보장",
      thumbnail: catImage,
    },
    {
      productId: 5,
      productName: "고양이 전용 밥",
      productPrice: "7,850원",
      productArrivalInfo: "내일(수) 도착 보장",
      thumbnail: catImage,
    },
    {
      productId: 6,
      productName: "강아지 전용 간식",
      productPrice: "3,000원",
      productArrivalInfo: "모레(목) 도착 보장",
      thumbnail: catImage,
    },
  ];

  return (
    <ProductWrapper>
     {data.map((product) => (
        <div key={product.productId}>
          {product.productName} - {product.productPrice}
        </div>
      ))}

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
        {productDataArray.map((productData, index) => (
          <Card
            key={index}
            productName={productData.productName}
            productPrice={productData.productPrice}
            productArrivalInfo={productData.productArrivalInfo}
            thumbnail={productData.thumbnail}
            productId={productData.productId}
          />
        ))}
      </CardWrapper>
    </ProductWrapper>
  );
};

export default Product;