import React from 'react';
import './FashionCard.css';

const FashionCard = ({ image, title, tag, subImages = [], date = '2025.07.02', index = '1/3' }) => {
  
  return (
    <div className="fashion-card">
      {/* 이미지 위에 텍스트 정보 */}
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
      {/* 이미지 아래 상품 태그 */}
      {subImages.length > 0 && (
        <div className="sub-product-wrap">
          <p className="sub-title">상품 태그 {subImages.length}개</p>
          {subImages.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="sub-product"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={item.img} alt={item.name} className="sub-image-thumb" />
              <div className="sub-info">
                <div className="sub-name">{item.name}</div>
                <div className="sub-detail">{item.detail}</div>
                <div className="sub-price">{item.price}</div>
                <div className="sub-review">리뷰 {item.review}</div>
              </div>
              <button className="bookmark-btn">♡</button>
            </a>
          ))}
        </div>
      )}


    </div>
  );
};

export default FashionCard;
