import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
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
  gap: 1rem;
`;

const Product = () => {
  const { data, isLoading, error } = useQuery('products', fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
        {data.map((productData, index) => (
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