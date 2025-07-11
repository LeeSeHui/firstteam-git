import React, { useState } from 'react';
import './Fashion.css';
import Img1 from '../../assets/fashionimg.png'; // 전체 기본 이미지
import Img2 from '../../assets/fashionproduct.png';
import Img3  from '../../assets/fashiondetail1.png';
import Img4  from '../../assets/fashiondetail2.png';
import Img5  from '../../assets/fashiondetail3.png';
import Img6  from '../../assets/fashiondetail4.png';
import Img7  from '../../assets/fashiondetail5.png';
import Img8  from '../../assets/fashiondetail6.png';
import Img9  from '../../assets/fashiondetail7.png';
import Img10  from '../../assets/fashiondetail8.png';
import Img11  from '../../assets/fashiondetail9.png';
import Img12  from '../../assets/fashiondetail10.png';
import BackButton from '../../components/Backbutton';
import { useNavigate } from 'react-router-dom';

const Fashion = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('전체');

  const goToDetail = (id) => {
    navigate(`/fashion/${id}`);
  };

  const renderContent = () => {
    switch (activeCategory) {
      case '전체':
        return (
          <>
          {/* GD */}
            <div className="fashion-card" onClick={() => goToDetail(1)} style={{ cursor: 'pointer' }}>
              <img src={Img1} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img2} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
             {/* 하니 */}
             <div className="fashion-card" onClick={() => goToDetail(2)} style={{ cursor: 'pointer' }}>
              <img src={Img3} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img4} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
             {/* 제니 */}
             <div className="fashion-card" onClick={() => goToDetail(3)} style={{ cursor: 'pointer' }}>
              <img src={Img5} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img6} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
             {/* 나연 */}
             <div className="fashion-card" onClick={() => goToDetail(4)} style={{ cursor: 'pointer' }}>
              <img src={Img7} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img8} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
             {/* 안유진 */}
             <div className="fashion-card" onClick={() => goToDetail(5)} style={{ cursor: 'pointer' }}>
              <img src={Img9} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img10} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
             {/* 조이 */}
             <div className="fashion-card" onClick={() => goToDetail(6)} style={{ cursor: 'pointer' }}>
              <img src={Img11} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img12} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
          </>
        );

      case '메이크업':
        return (
          <>
          {/* 하니 */}
            <div className="fashion-card" onClick={() => goToDetail(2)} style={{ cursor: 'pointer' }}>
              <img src={Img3} alt="메이크업" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img4} alt="제품" />
                <div className="product-info">
                  <h4>뉴진스 하니 메이크업</h4>
                  <p className="product-desc">웹툰 스타일 메이크업</p>
                  <p className="product-review">리뷰 215</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
            {/* 나연 */}
            <div className="fashion-card" onClick={() => goToDetail(4)} style={{ cursor: 'pointer' }}>
              <img src={Img7} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img8} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
            {/* 제니 */}
            <div className="fashion-card" onClick={() => goToDetail(3)} style={{ cursor: 'pointer' }}>
              <img src={Img5} alt="G-DRAGON 패션" className="main-image" />
            </div>
            <div className="product-tag">
              <p>상품 태그 1개</p>
              <div className="product-item">
                <img src={Img6} alt="모자" />
                <div className="product-info">
                  <h4>G-DRAGON Power Ball Cap White</h4>
                  <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                  <p className="product-review">리뷰 130</p>
                </div>
                <button className="save-icon">🔖</button>
              </div>
            </div>
          </>
        );

        case '공항패션':
        return (
        <>
          {/* GD */}
          <div className="fashion-card" onClick={() => goToDetail(1)} style={{ cursor: 'pointer' }}>
            <img src={Img1} alt="공항패션" className="main-image" />
          </div>
          <div className="product-tag">
            <p>상품 태그 1개</p>
            <div className="product-item">
              <img src={Img2} alt="모자" />
              <div className="product-info">
                <h4>G-DRAGON Power Ball Cap White</h4>
                <p className="product-desc">지드래곤 파워 볼캡 화이트</p>
                <p className="product-review">리뷰 130</p>
              </div>
              <button className="save-icon">🔖</button>
            </div>
          </div>

          {/* 안유진 */}
          <div className="fashion-card" onClick={() => goToDetail(5)} style={{ cursor: 'pointer' }}>
            <img src={Img9} alt="나연 공항패션" className="main-image" />
          </div>
          <div className="product-tag">
            <p>상품 태그 1개</p>
            <div className="product-item">
              <img src={Img10} alt="아이템" />
              <div className="product-info">
                <h4>나연 스타일 아이템</h4>
                <p className="product-desc">청순한 무드의 공항 패션</p>
                <p className="product-review">리뷰 89</p>
              </div>
              <button className="save-icon">🔖</button>
            </div>
          </div>

          {/* 조이 */}
          <div className="fashion-card" onClick={() => goToDetail(6)} style={{ cursor: 'pointer' }}>
            <img src={Img11} alt="나연 공항패션" className="main-image" />
          </div>
          <div className="product-tag">
            <p>상품 태그 1개</p>
            <div className="product-item">
              <img src={Img12} alt="아이템" />
              <div className="product-info">
                <h4>나연 스타일 아이템</h4>
                <p className="product-desc">청순한 무드의 공항 패션</p>
                <p className="product-review">리뷰 89</p>
              </div>
              <button className="save-icon">🔖</button>
            </div>
          </div>
        </>
      );
      default:
        return null; // 추후 공항패션, 일상룩, 운동룩 등 추가 가능
        
    }
  };

  const categories = ['전체', '메이크업', '공항패션', '일상룩', '운동룩'];

  return (
    <div className="fashion-page">
      <header className="fashion-header">
        <BackButton to="/home" />
        <h2>패션</h2>
      </header>

      <div className="fashion-search">
        <input type="text" placeholder="궁금한 키워드를 검색하세요.. ex) 어제 지디 공항룩" />
        <button className="search-icon">🔍</button>
      </div>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default Fashion;
