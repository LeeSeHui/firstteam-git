import React from 'react';
import './Media.css';
import BackButton from '../../../components/BackButton';
import search from '../../../assets/dm/search.png';

// ✅ 이미지 import
import live1 from '../../../assets/mypage/media/newjeansLive.png';
import live2 from '../../../assets/mypage/media/jennieLive.png';

import video1 from '../../../assets/mypage/media/blackpinkMovie.png';
import video2 from '../../../assets/mypage/media/jennieMovie.png';
import video3 from '../../../assets/mypage/media/newjeansMovie.png';

import post1 from '../../../assets/mypage/media/feed1.png';
import post2 from '../../../assets/mypage/media/feed2.png';
import post3 from '../../../assets/mypage/media/feed3.png';

const Media = () => {
  const handleSearchChange = (e) => {
    console.log('검색어:', e.target.value);
  };

  // ✅ 각 섹션별 이미지 데이터 3개씩
  const liveVideos = [
    { img: live1, title: '뉴진스 올해 첫 라방! 🥰', artist: 'NewJeans' },
    { img: live2, title: '제니 도쿄 라이브', artist: 'BLACKPINK' },
    { img: live2, title: '제니 서울 라방', artist: 'BLACKPINK' },
  ];

  const videos = [
    { img: video1, title: "BLΛƆKPIИK 'JUMP' M/V" },
    { img: video2, title: "JENNIE 1st Album 'Ruby'" },
    { img: video3, title: '[Jeans] 지니랜드 EP.1' },
  ];

  const posts = [
    { img: post1, title: '뉴진스 하니 룩북 메이크업' },
    { img: post2, title: '조이 인스타 스타일 모음' },
    { img: post3, title: '도레미 패션 정보 모음' },
  ];

  return (
    <div className="container">
      <BackButton
        label="최근 본 미디어"
        editText="편집"
        onEditClick={() => console.log('편집 클릭됨')}
      />

      <div className="media-search-box">
        <img src={search} alt="search" />
        <input
          type="text"
          placeholder="시청 기록 검색"
          onChange={handleSearchChange}
        />
      </div>

      {/* 라이브 */}
      <div className="mypage-media-section">
        <h3 className="media-section-title">라이브</h3>
        <div className="scroll-wrapper">
          {liveVideos.map((item, idx) => (
            <div className="media-card" key={idx}>
              <img src={item.img} alt={item.title} />
              <p className="media-title">{item.title}</p>
              <p className="media-sub">{item.artist}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 동영상 */}
      <div className="mypage-media-section">
        <h3 className="media-section-title">동영상</h3>
        <div className="scroll-wrapper">
          {videos.map((item, idx) => (
            <div className="media-card" key={idx}>
              <img src={item.img} alt={item.title} />
              <p className="media-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 게시물 */}
      <div className="mypage-media-section">
        <h3 className="media-section-title">게시물</h3>
        <div className="scroll-wrapper">
          {posts.map((item, idx) => (
            <div className="media-card" key={idx}>
              <img src={item.img} alt={item.title} />
              <p className="media-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
