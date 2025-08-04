import React, { useState } from 'react';
import './FashionCard.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const FashionCard = ({ image, title, tag, subImages = [], date = '2025.07.02', index = '1/3' }) => {
  const [likedItems, setLikedItems] = useState(Array(subImages.length).fill(false));

  const toggleLike = (i) => {
    const newLikes = [...likedItems];
    newLikes[i] = !newLikes[i];
    setLikedItems(newLikes);
  };

  return (
    <div className="fashion-card">
      <div className="image-container">
        {tag?.text && tag?.link && (
          <a
            href={tag.link}
            className="product-tag"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: tag.position?.top || '12px',
              left: tag.position?.left || 'auto',
              right: tag.position?.right || '12px',
              bottom: tag.position?.bottom || 'auto',
            }}
          >
            {tag.text.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </a>
        )}
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay">
          <div className="card-date">{date}</div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-index">{index}</div>
      </div>

      {subImages.length > 0 && (
  <div className="sub-product-wrap">
    <p className="sub-title">상품 태그 {subImages.length}개</p>

    <Swiper
      spaceBetween={12}
      slidesPerView={'auto'}
      grabCursor={true}
      style={{ padding: '8px 0' }}
    >
      {subImages.map((item, i) => (
        <SwiperSlide key={i} style={{ width: 160 }}>
          <a
            href={item.link}
            className="sub-product"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={item.img} alt={item.name} className="sub-image-thumb" />
            <div className="sub-info">
              <div className="sub-name">{item.name}</div>
              <div className="sub-detail">{item.detail}</div>
              <div className="sub-price">{item.price}</div>
              <div className="sub-review">리뷰 {item.review}</div>
            </div>
            <div
              className={`bookmark-btn ${likedItems[i] ? 'liked' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleLike(i);
              }}
            >
              ♡
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)}

    </div>
  );
};

export default FashionCard;
