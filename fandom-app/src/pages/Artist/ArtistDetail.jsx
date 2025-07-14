import './ArtistDetail.css'; // 필요 시 CSS 따로
import haerin from '../../assets/haerin-uproad.png';
import haerin2 from '../../assets/haerin-uproad2.png';

const ArtistDetail = () => {
  return (
    <>
      {/* 메시지 카드 */}
      <div className="message-card">
        <div className="message-header">
          <img src={haerin} alt="artist" className="haerin-uproad" />
          <div>
            <strong>해린</strong>
            <p className="message-time">07.01 05:06</p>
          </div>
        </div>
        <p className="message-content">
          멤버톤 도착! 푹 쉬고 내일 공연 잘하고 올게요 모두 내일 봐요~💜
        </p>
        <div className="message-stats">
          <span>💗 10K+</span>
          <span>💬 10K+</span>
        </div>
        <div className="message-images">
          <img src={haerin2} alt="artist" className="haerin-uproad2" />
          <img src={haerin} alt="artist" className="haerin-uproad" />
        </div>
      </div>

      <div className="message-card">
        <div className="message-header">
          <img src={haerin} alt="artist" className="haerin-uproad" />
          <div>
            <strong>해린</strong>
            <p className="message-time">07.01 05:06</p>
          </div>
        </div>
        <p className="message-content">
          멤버톤 도착! 푹 쉬고 내일 공연 잘하고 올게요 모두 내일 봐요~💜
        </p>
        <div className="message-stats">
          <span>💗 10K+</span>
          <span>💬 10K+</span>
        </div>
        <div className="message-images">
          <img src={haerin2} alt="artist" className="haerin-uproad2" />
          <img src={haerin} alt="artist" className="haerin-uproad" />
        </div>
      </div>

      <div className="message-card">
        <div className="message-header">
          <img src={haerin} alt="artist" className="haerin-uproad" />
          <div>
            <strong>해린</strong>
            <p className="message-time">07.01 05:06</p>
          </div>
        </div>
        <p className="message-content">
          멤버톤 도착! 푹 쉬고 내일 공연 잘하고 올게요 모두 내일 봐요~💜
        </p>
        <div className="message-stats">
          <span>💗 10K+</span>
          <span>💬 10K+</span>
        </div>
        <div className="message-images">
          <img src={haerin2} alt="artist" className="haerin-uproad2" />
          <img src={haerin} alt="artist" className="haerin-uproad" />
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;