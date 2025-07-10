import './ArtistHighlight.css'; // 필요 시 CSS 따로
import minji from '../../assets/minji.png';
import cardsend from '../../assets/cardsend.png';

const ArtistHighlight = () => {
  return (
    <section className="artist-highlight">
      {/* 아티스트 프로필 둥근 영역 */}
    

      {/* 멤버 프로필 탭 */}
      <ul className="member-thumbnails">
        <li><img src={minji} alt="member" className="minji-img" /></li>
        <li><img src={minji} alt="member" className="minji-img" /></li>
        <li><img src={minji} alt="member" className="minji-img" /></li>
        <li><img src={minji} alt="member" className="minji-img" /></li>
        <li><img src={minji} alt="member" className="minji-img" /></li>
      </ul>

      {/* 배너 - 이벤트 or 메시지 */}
      <div className="highlight-banner">
      <img src={cardsend} alt="member" className="cardsend" />
        <div className="banner-text">
          <p>8/17 HAPPY NewJeans 1year DAY</p>
          <button className="message-btn">축하 메시지 보내기</button>
        </div>
      </div>

      {/* 공지 영역 */}
      <div className="highlight-notice">
        <p><span className="speaker-icon">📢</span> [안내] NewJeans Global Fansign... 공지</p>
        <p>NewJeans 일정을 확인해보세요. →</p>
      </div>

      {/* 투표 배너 */}
      <div className="vote-banner">
        {/* <img src="/img/vote.jpg" alt="Vote Banner" /> */}
        <div className="vote-text">
          <span className="d-day">투표 D-1</span>
          <p>이번 여름,<br />뉴진스를 응원해주세요!</p>
          <a href="/vote" className="vote-link">투표 바로가기 →</a>
        </div>
      </div>

      {/* 메시지 카드 */}
      <div className="message-card">
        <div className="message-header">
          <img src="/img/haerin.jpg" alt="Haerin" />
          <div>
            <strong>해린</strong>
            <p className="message-time">07.01 05:06</p>
          </div>
        </div>
        <p className="message-content">멤버톤 도착! 푹 쉬고 내일 공연 잘하고 올게요 모두 내일 봐요~💜</p>
        <div className="message-stats">
          <span>💗 10K+</span>
          <span>💬 10K+</span>
        </div>
        <div className="message-images">
          <img src="/img/highlight_img1.jpg" alt="highlight1" />
          <img src="/img/highlight_img2.jpg" alt="highlight2" />
        </div>
      </div>

      {/* 라이브 리플레이 */}
      <div className="live-replay">
        <img src="/img/live_replay.jpg" alt="Live Replay" />
        <div className="replay-info">
          <p className="name">해린</p>
          <p className="date">07.01 05:06</p>
          <p className="text">오늘은 우리랑 블링크의 8주년~! 축하해💞🎉</p>
        </div>
      </div>
    </section>
  );
};

export default ArtistHighlight;