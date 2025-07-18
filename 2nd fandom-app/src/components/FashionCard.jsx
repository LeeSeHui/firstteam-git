import React from 'react';
import './FashionCard.css';

const FashionCard = ({ image, title, tag, subImages = [], date = '2025.07.02', index = '1/3' }) => {
  
  return (
    <div className="fashion-card">
      {/* 이미지 위에 텍스트 정보 */}
      <div className="image-container">
        <div className="product-tag">{tag}</div>
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay">
          <div className="card-date">{date}</div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-index">{index}</div>
      </div>

      {/* 이미지 아래 상품 태그 */}
      {subImages.length > 0 && (
        <div className="sub-product-wrap">
          <p className="sub-title">상품 태그 {subImages.length}개</p>
          <div className="sub-product">
            <img src={subImages[0].img} alt={subImages[0].name} className="sub-image-thumb" />
            <div className="sub-info">
              <div className="sub-name">{subImages[0].name}</div>
              <div className="sub-detail">{subImages[0].detail}</div>
              <div className="sub-price">{subImages[0].price}</div>
              <div className="sub-review">리뷰 {subImages[0].review}</div>
            </div>
            <button className="bookmark-btn">♡</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FashionCard;
