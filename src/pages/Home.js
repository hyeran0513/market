import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import blackShirt from "../assets/images/bg/bg_black_shirt.jpg";
import Card from "../components/Card";
import { FcComboChart } from "react-icons/fc";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const HomeWrapper = styled.div``;

const HomeInner = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1240px;
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

const ImageItem = styled.div`
  &:nth-child(1) {
    grid-row: 1 / 3;
    width: 460px;
    height: 630px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Home = () => {
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
    if (!timestamp) return "";

    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };

  return (
    <HomeWrapper>
      <HomeInner>
        <Section>
          <SectionHead>
            <SectionTitle>
              <FcComboChart /> 인기상품
            </SectionTitle>
            <Link to="/product">더 보기</Link>
          </SectionHead>
        </Section>

        <Section>
          <ImageWrapper>
            <ImageItem>
              <img src={blackShirt} alt="Black Shirt" />
            </ImageItem>

            {items.map((item, index) => (
              <ImageItem key={index}>
                <Card
                  key={item.productId}
                  productName={item.productName}
                  productPrice={item.productPrice}
                  productArrivalDate={formatDate(item.arrivalDate)}
                  thumbnail={item.thumbnail}
                  productId={item.productId}
                />
              </ImageItem>
            ))}
          </ImageWrapper>
        </Section>
      </HomeInner>
    </HomeWrapper>
  );
};

export default Home;
