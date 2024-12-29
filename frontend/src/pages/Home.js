import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "react-query";
import Card from "../components/Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const BtnSlidePrev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e8e8e8;

  svg {
    font-size: 1.5rem;
  }
`;

const BtnSlideNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e8e8e8;

  svg {
    font-size: 1.5rem;
  }
`;

const fetchProducts = async () => {
  const response = await fetch("http://localhost:5000/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Home = () => {
  const { data, isLoading, error } = useQuery("products", fetchProducts);

  const swiperRef = useRef();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <BtnWrap>
        <BtnSlidePrev type="button" onClick={() => swiperRef.current.swiper.slidePrev()}>
          <BiChevronLeft />
        </BtnSlidePrev>
        <BtnSlideNext type="button" onClick={() => swiperRef.current.swiper.slideNext()}>
          <BiChevronRight />
        </BtnSlideNext>
      </BtnWrap>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={16}
        slidesPerView={4}
        loop={true}
      >
        {data.map((productData, index) => (
          <SwiperSlide key={index}>
            <Card
              productName={productData.productName}
              productPrice={productData.productPrice}
              productArrivalInfo={productData.productArrivalInfo}
              thumbnail={productData.thumbnail}
              productId={productData.productId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;