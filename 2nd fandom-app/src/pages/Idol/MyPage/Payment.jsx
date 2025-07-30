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
import popup from '../../../assets/mypage/payment/popup.png';


const subscribedArtists = [
  { id: 1, name: 'NewJeans', img: Group1, date: '2025년 7월 25일' },
  { id: 2, name: 'G-Dragon', img: Group2, date: '2025년 8월 21일' },
  { id: 3, name: 'TWS', img: Group3, date: '2025년 8월 3일' },
];

const Payment = () => {
  const navigate = useNavigate();
  const isDarkMode = document.body.classList.contains('dark');

  const [showPopup, setShowPopup] = useState(false);
  const [unsubscribedIds, setUnsubscribedIds] = useState([]);
  const [unsubscribingId, setUnsubscribingId] = useState(null);

  const handlePlusClick = () => {
    navigate('/onboarding/select-artist', { state: { fromHome: true } });
  };

  const handleRecommendSubscribe = () => {
    navigate('/idol/home/membership');
  };

  const handleUnsubscribeClick = (id) => {
    setUnsubscribingId(id);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    if (unsubscribingId !== null) {
      setUnsubscribedIds(prev => [...prev, unsubscribingId]);
    }
    setShowPopup(false);
    setUnsubscribingId(null);
  };


  return (
    <div className="payment-container">
      <BackButton label="결제내역" />

      {/* 채널 추가 버튼 */}
      <div className="add-artist-button">
        <button onClick={handlePlusClick}>
          <div className="icon-with-dot">
      <img src={isDarkMode ? plusIconDark : plusIcon} alt="아티스트 추가" />
      <span className="payment-red-dot"></span>  {/* 빨간 점 추가 */}
    </div>
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
          {subscribedArtists.map(artist => {
            const isUnsubscribed = unsubscribedIds.includes(artist.id);
            return (
              <li className="avatar-item" key={artist.id}>
                <div className="avatar-wrapper">
                  <img src={artist.img} alt={artist.name} />
                  <div className="red-dot"></div>
                </div>
                <div className="info">
                  <p>{artist.name} <img src={mark} alt="badge" /></p>
                  <span className='sub-color'>
                    {isUnsubscribed ? '구독 해지됨' : `다음 결제일 : ${artist.date}`}
                  </span>
                </div>

                {isUnsubscribed ? (
                <button
                  className="subscribe-button has-dot"
                  onClick={handleRecommendSubscribe}
                >
                  가입
                </button>
              ) : (
                <button
                  className="payment-cancel-button sub-color has-dot"
                  onClick={() => handleUnsubscribeClick(artist.id)}
                >
                  해지
                </button>
              )}


              </li>
            );
          })}
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
              <span className='sub-color'>@enhypen</span>
            </div>
            <button className="subscribe-button has-dot" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo2} alt="SEVENTEEN" />
            <div className="info">
              <p>SEVENTEEN <img src={mark} alt="badge" /></p>
              <span className='sub-color'>@saythename_17</span>
            </div>
           <button className="subscribe-button has-dot" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo3} alt="BLACKPINK" />
            <div className="info">
              <p>BLACKPINK <img src={mark} alt="badge" /></p>
              <span className='sub-color'>@blackpinkofficial</span>
            </div>
            <button className="subscribe-button has-dot" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo4} alt="NMIXX" />
            <div className="info">
              <p>NMIXX <img src={mark} alt="badge" /></p>
              <span className='sub-color'>@nmixx_official</span>
            </div>
            <button className="subscribe-button has-dot" onClick={handleRecommendSubscribe}>가입</button>
          </li>
          <li>
            <img src={logo5} alt="IVE" />
            <div className="info">
              <p>IVE <img src={mark} alt="badge" /></p>
              <span className='sub-color'>@IVEstarship</span>
            </div>
            <button className="subscribe-button has-dot" onClick={handleRecommendSubscribe}>가입</button>
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
