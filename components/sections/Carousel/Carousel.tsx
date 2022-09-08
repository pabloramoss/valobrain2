// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Pagination, Navigation} from "swiper";
import React from "react";
import styled from "styled-components";

import {SlideItem} from "./SlideItem";

const Wrapper = styled.div`
  height: 300px;
  width: 800px;
`;

export const Carousel: React.FC = () => {
  return (
    <Wrapper>
      <Swiper
        className="mySwiper"
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerGroup={3}
        slidesPerView={3}
        spaceBetween={30}
      >
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
