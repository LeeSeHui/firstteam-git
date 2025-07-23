// src/pages/Idol/Live.jsx
import React, { useState } from 'react';
import './Live.css';
import newjeansLive from '../../../assets/Home/liveplay.mp4';
import profileIcon from '../../../assets/Home/artist1.png';
import liveBadge from '../../../assets/Home/liveBadge.png';
import BackButton from '../../../components/BackButton';

// 좋아요 아이콘 이미지
import likeDefault from '../../../assets/Home/live-like.png';
import likeRed from '../../../assets/Home/live-likered.png';
// 필요 시 댓글, 채팅 아이콘도 import
import liveCommentIcon from '../../../assets/Home/live-comment.png';
import liveCommet2Icon from '../../../assets/Home/live-commet2.png';

const Live = () => {
  const [isLiked, setIsLiked] = useState(false);

  console.log('Live 페이지 렌더됨');

  return (
    <div className="live-wrapper">
      <div className="video-container">
        <BackButton className="live-back-button" to="/idol/home" />
        <video
          className="live-video"
          src={newjeansLive}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="live-overlay">
          <img src={profileIcon} alt="profile" className="profileIcon" />
          <img src={liveBadge} alt="LIVE" className="live-badge" />
        </div>
      </div>

      {/* 댓글 영역 */}
      <div className="live-comments">
        <p className="comment"><span className="user">해인</span>아 너무 귀여워!!!!❤️❤️</p>
        <p className="comment"><span className="user">뉴진스</span>도 새해 복 많이 받아~🥰</p>
        <p className="comment"><span className="user">팬</span>왔는데 뉴비 틀자마자 뉴진스 있어서 힐링ㅠㅠ</p>
      </div>

      {/* 좋아요 / 댓글 / 채팅 아이콘 */}
      <div className="live-icons">
        <img
          src={isLiked ? likeRed : likeDefault}
          alt="좋아요"
          onClick={() => setIsLiked(!isLiked)}
          style={{ cursor: 'pointer' }}
        />
        <img src={liveCommentIcon} alt="댓글" />
        <img src={liveCommet2Icon} alt="채팅" />
      </div>

      {/* 입력창 */}
      <div className="live-comments-box">
        <input
          type="text"
          placeholder="예쁜 댓글을 입력해주세요."
        />
        
      </div>
    </div>
  );
};

export default Live;
