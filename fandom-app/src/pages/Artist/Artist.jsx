import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from '../../assets/artist_actor.png';
import './Artist.css';
import BackButton from '../../components/Backbutton';

const Artist = () => {
  const Nav = useNavigate();

  return (
    <>
      <BackButton to="/home" />

      {/* 아티스트 헤더 */}
      <section className="artist-header">
        <img src={profileImg} alt="artist" className="artist-profile-img" />
        <h1 className="artist-name">GO YOUNJUNG</h1>
        <button
  className="membership-btn"
  onClick={() => Nav('/membership')}
>
  + Membership
</button>
      </section>

      {/* 탭 메뉴 */}
      <div className="artist-tabs">
        <ul>
          <li className="active">Highlight</li>
          <li>Artist</li>
          <li>Gallery</li>
          <li>Membership</li>
          <li>Notice</li>
        </ul>
      </div>

      {/* 방송 카드 */}
      <section className="broadcast-card">
        <img src={profileImg} alt="방송 썸네일" className="broadcast-thumb" />
        <p className="broadcast-title">7/23 tvN ‘슬기로운 전공의생활’ 첫 방송!</p>
        <button className="message-btn">응원 메시지 보내기</button>
      </section>

      {/* 공지사항 리스트 */}
      <section className="notice-list">
        <div className="notice-item">[안내] NewJeans Global Fansign... 공지</div>
        <div className="notice-item">NewJeans 일정을 확인해보세요.</div>
      </section>

      {/* 투표 배너 */}
      <section className="vote-banner">
        <p className="vote-title">이번 여름, 뉴진스를 응원해주세요! 👉</p>
      </section>

      {/* 아티스트 피드 */}
      <section className="artist-feed">
        <div className="feed-post">
          <div className="feed-header">
            <span className="feed-user">윤정</span>
            <span className="feed-date">07.01 05:06</span>
          </div>
          <p className="feed-text">멤버톤 도착~ 푹 쉬고 내일 공연 잘하고 올게요 💜</p>
          <div className="feed-images">
            <img src={profileImg} alt="피드 이미지1" />
            <img src={profileImg} alt="피드 이미지2" />
          </div>
        </div>

        {/* 라이브 리플레이 */}
        <div className="live-replay">
          <img src={profileImg} alt="라이브 리플레이" />
          <p>53:34</p>
        </div>

        {/* 피드 카드 추가 */}
        <div className="feed-post">
          <div className="feed-header">
            <span className="feed-user">윤정</span>
            <span className="feed-date">07.01 05:06</span>
          </div>
          <p className="feed-text">오늘은 우리랑 블링크의 8주년! 축하해🎉</p>
        </div>
      </section>
    </>
  );
};

export default Artist;