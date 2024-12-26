import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setItems(data);
      } catch (error) {
        console.error("에러:", error);
      }
    };

    fetchData();
  }, []);

  // 타임스탬프를 날짜 형식으로 변환
  const formatDate = (timestamp) => {
    if (!timestamp) return '';

    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };

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
        {items.map((item) => (
          <Card
            key={item.productId}
            productName={item.productName}
            productPrice={item.productPrice}
            productArrivalDate={formatDate(item.arrivalDate)}
            thumbnail={item.thumbnail}
            productId={item.productId}
          />
        ))}
      </CardWrapper>
    </ProductWrapper>
  );
};

export default Product;