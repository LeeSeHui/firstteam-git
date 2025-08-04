

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TestSwiper = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={'auto'} grabCursor={true}>
      <SwiperSlide style={{ width: '200px', background: '#eee' }}>Slide 1</SwiperSlide>
      <SwiperSlide style={{ width: '200px', background: '#ccc' }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ width: '200px', background: '#aaa' }}>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default TestSwiper;