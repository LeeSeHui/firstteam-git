import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../components/BackButton';
import Popup from '../../../components/Popup';
import './Payment.css';
import '/src/index.css';

import plusIcon from '../../../assets/mypage/payment/plus.png';
import plusIconDark from '../../../assets/dark/plus-dark.png';
import Group1 from '../../../assets/mypage/payment/Group1.png';
import Group2 from '../../../assets/mypage/payment/Group2.png';
import Group3 from '../../../assets/mypage/payment/Group3.png';
import logo1 from '../../../assets/mypage/payment/logo1.png';
import logo2 from '../../../assets/mypage/payment/logo2.png';
import logo3 from '../../../assets/mypage/payment/logo3.png';
import logo4 from '../../../assets/mypage/payment/logo4.png';
import logo5 from '../../../assets/mypage/payment/logo5.png';
import mark from '../../../assets/mypage/payment/mark.png';
import popup from '../../../assets/mypage/payment/popup.png'; // ✅ 팝업 이미지


const Payment = () => {
  const navigate = useNavigate();
  const isDarkMode = document.body.classList.contains('dark');
  const handleRecommendSubscribe = () => {
    navigate('/idol/home/membership'); // 원하는 경로로 이동
  };

  const [showPopup, setShowPopup] = useState(false);

  const handlePlusClick = () => {
    navigate('/onboarding/select-artist', { state: { fromHome: true } });
  };

  const handleUnsubscribeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <BackButton label="결제내역(멤버십 관리)" />

      {/* 채널 추가 버튼 */}
      <div className="add-artist-button">
        <button onClick={handlePlusClick}>
          <img src={isDarkMode ? plusIconDark : plusIcon} alt="아티스트 추가" />
          <span className='payment-add-button sub-color'>채널 추가하기</span>
        </button>
      </div>

      {/* 구독 채널 섹션 */}
      <div className="subscribed-section">
        <div className="section-header">
          <span className="payment-title">구독채널</span>
          <button className="sort-button">
            <span className="sort-label">최신순</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
        <ul className="subscribed-list">
          <li className="avatar-item">
            <div className="avatar-wrapper">
              <img src={Group1} alt="NewJeans" />
              <div className="red-dot"></div>
            </div>
            <div className="info">
              <p>NewJeans <img src={mark} alt="badge" /></p>
              <span className='sub-color'>다음 결제일 : 2025년 7월 25일</span>
            </div>
            <button className="payment-cancel-button sub-color" onClick={handleUnsubscribeClick}>해지</button>
          </li>
          <li className="avatar-item">
            <div className="avatar-wrapper">
              <img src={Group2} alt="G-Dragon" />
              <div className="red-dot"></div>
            </div>
            <div className="info">
              <p>G-Dragon <img src={mark} alt="badge" /></p>
              <span className='sub-color'>다음 결제일 : 2025년 8월 21일</span>
            </div>
            <button className="payment-cancel-button sub-color" onClick={handleUnsubscribeClick}>해지</button>
          </li>
          <li className="avatar-item">
            <div className="avatar-wrapper">
              <img src={Group3} alt="TWS" />
              <div className="red-dot"></div>
            </div>
            <div className="info">
              <p>TWS <img src={mark} alt="badge" /></p>
              <span className='sub-color'>다음 결제일 : 2025년 8월 3일</span>
            </div>
            <button className="payment-cancel-button sub-color" onClick={handleUnsubscribeClick}>해지</button>
          </li>
        </ul>
      </div>

      {/* 추천 섹션 */}
      <div className="recommend-section">
          <div className="section-header">
          <span className="payment-title">추천</span>
          </div>
        <ul className="payment-recommend-list">
          <li>
            <img src={logo1} alt="ENHYPEN" />
            <div className="info">
              <p>ENHYPEN <img src={mark} alt="badge" /></p>
              <span>@enhypen</span>
            </div>
            <button className="subscribe-button" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo2} alt="SEVENTEEN" />
            <div className="info">
              <p>SEVENTEEN <img src={mark} alt="badge" /></p>
              <span>@saythename_17</span>
            </div>
           <button className="subscribe-button" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo3} alt="BLACKPINK" />
            <div className="info">
              <p>BLACKPINK <img src={mark} alt="badge" /></p>
              <span>@blackpinkofficial</span>
            </div>
            <button className="subscribe-button" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo4} alt="NMIXX" />
            <div className="info">
              <p>NMIXX <img src={mark} alt="badge" /></p>
              <span>@nmixx_official</span>
            </div>
            <button className="subscribe-button" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo5} alt="IVE" />
            <div className="info">
              <p>IVE <img src={mark} alt="badge" /></p>
              <span>@IVEstarship</span>
            </div>
            <button className="subscribe-button" onClick={handleRecommendSubscribe}>가입</button>
          </li>
        </ul>
      </div>

      {/* 팝업 창 */}
      {showPopup && (
        <Popup
          type="unsubscribe"
          unsubscribeImg={popup}
          onConfirm={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Payment;
