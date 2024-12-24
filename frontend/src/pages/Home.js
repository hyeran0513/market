import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import blackShirt from "../assets/images/bg/bg_black_shirt.jpg";
import catImage from "../assets/images/bg/bg_cat.jpg";
import Card from "../components/Card";
import { FcComboChart } from "react-icons/fc";

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

            {productDataArray.map((productData, index) => (
              <ImageItem key={index}>
                <Card
                  productName={productData.productName}
                  productPrice={productData.productPrice}
                  productArrivalInfo={productData.productArrivalInfo}
                  thumbnail={productData.thumbnail}
                  productId={productData.productId}
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