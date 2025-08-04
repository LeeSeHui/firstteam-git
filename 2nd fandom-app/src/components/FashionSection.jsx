import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FashionCard from './FashionCard';
import './FashionSection.css';

const FashionSection = ({ title, cards }) => {
  return (
    <section className="fashion-section">
      {title && <h3 className="section-title">{title}</h3>}

      <Swiper
        spaceBetween={16}
        slidesPerView={'auto'}
        grabCursor={true}
        style={{ paddingRight: '50px' }} // 양옆 패딩 조절 가능
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{  }} // 카드 너비 고정 (필요 시 조정)
          >
            <FashionCard
              image={card.image}
              title={card.title}
              tag={card.tag}
              subImages={card.subImages}
              date={card.date}
              index={`${index + 1}/${cards.length}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FashionSection;
