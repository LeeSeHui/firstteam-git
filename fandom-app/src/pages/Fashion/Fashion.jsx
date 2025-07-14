import React from 'react';
import './Fashion.css';
import fashionImg from '../../assets/fashionimg.png';
import fashionPro from '../../assets/fashionproduct.png';
import BackButton from '../../components/Backbutton';


const Fashion = () => {
  return (
    <div className="fashion-page">

      {/* 헤더 */}
      <header className="fashion-header">
      <BackButton to="/home" />
        <h2>패션</h2>
      </header>

      {/* 검색 바 */}
      <div className="fashion-search">
        <input type="text" placeholder="궁금한 키워드를 검색하세요.. ex) 어제 지디 공항룩" />
        <button className="search-icon">🔍</button>
      </div>

      {/* 카테고리 필터 */}
      <div className="category-filter">
        <button className="active">전체</button>
        <button>공항패션</button>
        <button>출근록</button>
        <button>일상록</button>
        <button>운동록</button>
      </div>

      {/* 작성자 정보 */}
      <div className="author-info">
        <img src="/assets/profile.png" alt="관리자" className="author-avatar" />
        <div className="author-text">
          <span className="author-name">관리자</span>
          <span className="author-date">2024.01.01</span>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="fashion-card">
        <img src={fashionImg} alt="G-DRAGON 패션" className="main-image" />
        <div className="card-overlay">
          <p className="card-date">2025.07.04</p>
          <h3 className="card-title">지드래곤 공항패션 모자 정보</h3>
          <span className="card-count">1/13</span>
          <div className="product-price">G-DRAGON Power...<br />215,000원</div>
        </div>
      </div>

      {/* 상품 태그 */}
      <div className="product-tag">
        <p>상품 태그 1개</p>
        <div className="product-item">
          <img src={fashionPro} alt="모자" />
          <div className="product-info">
            <h4>G-DRAGON Power Ball Cap White</h4>
            <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
            <p className="product-price">215,000원</p>
            <p className="product-review">리뷰 130</p>
          </div>
          <button className="save-icon">🔖</button>
        </div>
      </div>

      {/* 하단 내비게이션 */}
      <nav className="bottom-nav">
        <button className="nav-item active">home</button>
        <button className="nav-item">chat</button>
        <button className="nav-item center">i-dol</button>
        <button className="nav-item">Star Lens</button>
        <button className="nav-item">me</button>
      </nav>
    </div>
  );
};

export default Fashion;
