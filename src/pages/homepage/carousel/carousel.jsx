import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import block1 from "./images/Блок 1.jpg";
import block2 from "./images/Блок 2.jpg";
import block3 from "./images/Блок 3.jpg";
import { Link } from "react-router-dom";

const images = [
  { src: block1, text: "Консультация нейропсихолога и диагностика" },
  { src: block2, text: "Слуховая стимуляция мозга по методу А. Томатиса" },
  { src: block3, text: "Групповые занятия" },
];

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: auto;

  .swiper-slide {
    position: relative;
    overflow: hidden;
  }

  .image-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    @media (min-width: 768px) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .text-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    padding: 40px;
    font-size: 20px;

    @media (max-width: 768px) {
      padding: 20px;
      font-size: 16px;
    }
  }
`;

export const Carousel = () => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to="#">
              <div className="image-container">
                <img src={item.src} alt={`Slide ${index}`} />
              </div>
              <div className="text-overlay">{item.text}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
