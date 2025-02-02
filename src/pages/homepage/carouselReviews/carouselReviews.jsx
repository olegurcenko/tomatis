import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image1 from "./images/-2147483648_-235557.jpg";
import image2 from "./images/-2147483648_-235559.jpg";
import image3 from "./images/-2147483648_-235561.jpg";
import image4 from "./images/-2147483648_-235563.jpg";
import image5 from "./images/-2147483648_-235565.jpg";
import image6 from "./images/-2147483648_-235567.jpg";
import image7 from "./images/-2147483648_-235569.jpg";
import image8 from "./images/-2147483648_-235571.jpg";
import image9 from "./images/-2147483648_-235573.jpg";
import image10 from "./images/-2147483648_-235575.jpg";
import image11 from "./images/-2147483648_-235585.jpg";

const images = [
  { src: image1},
  { src: image2},
  { src: image3},
  { src: image4},
  { src: image5},
  { src: image6},
  { src: image7},
  { src: image8},
  { src: image9},
  { src: image10},
  { src: image11},
];

const CarouselContainer = styled.div`
  max-width: 600px;
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
    max-height: 400px;
    object-fit: contain;
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

export const CarouselReviews = () => {
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
					  </Link>
					</SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
