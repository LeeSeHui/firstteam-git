import React from 'react';
import './Media.css';
import '/src/index.css';
import BackButton from '../../../components/BackButton';
import search from '../../../assets/dm/search.png';
import searchDark from '../../../assets/dark/dark_search.png';

// ✅ 이미지 import
import live1 from '../../../assets/mypage/media/newjeansLive.png';
import live2 from '../../../assets/mypage/media/newjeansLive2.png';
import live3 from '../../../assets/mypage/media/newjeansLive3.png';
import live4 from '../../../assets/mypage/media/newjeansLive4.png';
import video1 from '../../../assets/mypage/media/blackpinkMovie.png';
import video2 from '../../../assets/mypage/media/jennieMovie.png';
import video3 from '../../../assets/mypage/media/newjeansMovie.png';
import post1 from '../../../assets/mypage/media/feed1.png';
import post2 from '../../../assets/mypage/media/feed2.png';
import post3 from '../../../assets/mypage/media/feed3.png';
import recent1 from '../../../assets/mypage/media/newjeansLiveCover.png';
import recent2 from '../../../assets/mypage/media/newjeansLiveCover2.png';



const Media = () => {
  const handleSearchChange = (e) => {
    console.log('검색어:', e.target.value);
  };

  const isDarkMode = document.body.classList.contains('dark');


  // ✅ 각 섹션별 이미지 데이터 3개씩
  const liveVideos = [
    { img: live2, title: '뉴진스 파자마 파티 💖', artist: 'NewJeans', date: '2025.07.18' },
    { img: live1, title: '뉴진스 올해 첫 라방! 🥰', artist: 'NewJeans', date: '2025.01.01' },
    { img: live3, title: '뉴진스 해피 크리스마스 데이 🎄', artist:'NewJeans', date: '2024.12.25'},
  ];

  const videos = [
     { img: video3, title: '[Jeans] 지니랜드 EP.1 축 개업 ♨ ' },
    { img: video1, title: "BLACKPIИK 'JUMP' New M/V" },
    { img: video2, title: "JENNIE 1st  Studio Album 'Ruby -Teaser'" },
    
  ];
 const posts = [
    { img: post1, text: '뉴진스 하니\n웜톤 메이크업' },
    { img: post2, text: '조이 인스타 속\n데일리룩 모음' },
    { img: post3, text: '지드래곤\n패션 정보 모음' },
  ];


  const recentWatched = [
  {img: recent1, title: '[Jeans] 조금 이른 봄놀이', artist: 'NewJeans', date: '2025.07.20',isLive: true,},
  {img: recent2, title: '[Jeans] OMG-Dace practice', artist: 'NewJeans', date: '2025.07.20', isLive: true,},
  {img: live4, title: '뉴진스 해린 생일 라방🎉', artist: 'NewJeans', date: '2025.07.20',isLive: true,
  },
];


  return (
    <div className="Media-container">
      <BackButton
        label="최근 본 미디어"
        editText=""
        onEditClick={() => console.log('편집 클릭됨')}
      />

      <div className="media-search-box">
        <img src={isDarkMode ? searchDark : search} alt="search" />
        <input
          type="text"
          placeholder="시청 기록 검색"
          onChange={handleSearchChange}
        />
      </div>

      {/* 라이브 */}
      <div className="mypage-media-section">
        <p className="media-section-title">라이브</p>
        <div className="scroll-wrapper">
          {liveVideos.map((item, idx) => (
            <div className="media-card" key={idx}>
              <img src={item.img} alt={item.title}className='media-img' />
              <p className="media-title">{item.title}</p>
              <p className="media-sub">
                <span className="artist sub-color">{item.artist}</span>
                <span className="date sub-color">{item.date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 동영상 */}
      <div className="mypage-media-section">
        <p className="media-section-title">동영상</p>
        <div className="scroll-wrapper">
          {videos.map((item, idx) => (
            <div className="media-card" key={idx}>
              <img src={item.img} alt={item.title}className='media-img' />
              <p className="media-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

        {/* 게시물 */}
    <div className="mypage-media-section">
      <p className="media-section-title">게시물</p>
      <div className="scroll-wrapper post-wrapper">
        {posts.map((item, idx) => (
          <div className="media-card post-card" key={idx}>
            <div className="media-image-wrapper">
              <img src={item.img} alt={`피드${idx}`} className="post-img" />
              <p className="Media-overlay-text">
                {item.text.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

     {/* 어제 본 콘텐츠 */}
    <div className="mypage-media-section">
      <p className="media-section-title">어제</p>
      <div className="recently-watched-wrapper">
        {recentWatched.map((item, idx) => (
          <div className="recent-card" key={idx}>
            <div className="thumbnail-wrapper">
              <img src={item.img} alt={item.title} className="recent-thumb" />
            </div>
            <div className="recent-info">
              <p className="recent-title">{item.title}</p>
              <p className="recent-sub">
                <span className="artist sub-color">{item.artist}</span>
                <span className="date sub-color">{item.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Media;
