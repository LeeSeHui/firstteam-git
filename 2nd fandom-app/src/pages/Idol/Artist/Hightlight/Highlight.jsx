import React from 'react';
import { useNavigate } from 'react-router-dom';

import minji from '../../../../assets/artist-select/minji.png';
import haein from '../../../../assets/artist-select/haein.png';
import hani from '../../../../assets/artist-select/hani.png';
import daniel from '../../../../assets/artist-select/daniel.png';
import herin from '../../../../assets/artist-select/herin.png';

import card from '../../../../assets/artist-select/cardsend.png'; // 배경 이미지 (단체샷)
import letter from '../../../../assets/artist/heartletter.png'; // 하트 편지
import vote from '../../../../assets/artist/votebanner.png';
import feedimg1 from '../../../../assets/artist/artistfeed1.png';
import live from '../../../../assets/artist/livereplay.png';



import './Highlight.css';

const Highlight = () => {
  const navigate = useNavigate();

  return (
    <div className="highlight-wrapper">
      {/* 아티스트 이미지 가로 정렬 */}
      <div className="artist-row">
        <img src={minji} alt="minji" />
        <img src={haein} alt="haein" />
        <img src={hani} alt="hani" />
        <img src={daniel} alt="daniel" />
        <img src={herin} alt="herin" />
      </div>

      {/* 축하 카드 전송 섹션 */}
      <div className="card-section">
        <img src={card} alt="NewJeans Group" className="card-bg" />
        <img src={letter} alt="Heart Letter" className="heart-letter" />
        <button
          className="send-btn"
          onClick={() => alert('축하 카드가 전송되었습니다!')}
        >
          축하 카드 전송
        </button>
      </div>

      {/* 공지 */}
      <div className="notice-box">
        <p>📢 [안내] NewJeans Global Fansign... 공지</p>
        <p>📢 NewJeans 일정을 확인해보세요.</p>
      </div>

      {/* 투표 배너 */}
      <div className="vote-banner" onClick={() => navigate('/idol/home/vote')}>
        <img src={vote} alt="투표 배너" />
      <div className="vote-content">
        <span className="vote-badge">마감 D-3</span>
        <p className="vote-message">이번 여름,<br />뉴진스를 응원해주세요!</p>
        <span className="vote-go">투표 바로가기 &gt;</span>
      </div>
      </div>

      {/* 아티스트 피드 카드 */}
      <div className="feed-card">
        {/* 상단 프로필 영역 */}
        <div className="feed-header">
          <div className="profile-info">
            <img src={herin} alt="해린 프로필" className="profile-img" />
            <div>
              <p className="nickname">해린 <span className="badge">✔️</span></p>
              <p className="time">07.01. 05:06</p>
            </div>
          </div>
          <button className="bookmark-btn">🔖</button>
        </div>

        {/* 텍스트 콘텐츠 */}
        <p className="feed-text">
          멜버른 도착! 내일 공연 잘하고 올게요<br />
          모두 내일 봐요~💜
        </p>

        {/* 좋아요 수 */}
        <div className="post-footer">
          <div className="like-counts">
            <span>💛10K+</span>
            <span>💬10K+</span>
          </div>
        </div>

        {/* 하단 이미지 2개 */}
        <div className="feed-images">
          <img src={feedimg1} alt="피드1" />
        </div>
      </div>

{/* 라이브 리플레이 */}
<div className="live-replay">
  <p className="live-title"><span className="live-red">Live</span> Replay</p>
  
  <img src={live} alt="Live Replay" className="live-thumbnail" />

  <div className="live-header">
    <div className="profile-info">
      <img src={herin} alt="해린 프로필" className="profile-img" />
      <div>
        <p className="nickname">해린 <span className="badge">✔️</span></p>
        <p className="time">07.01. 05:06</p>
      </div>
    </div>

    <p className="live-desc">1주년 기념 라이브 방송 보러오세요~</p>

    <div className="post-footer">
      <div className="like-counts">
          <span>💛10K+</span>
          <span>💬10K+</span>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Highlight;