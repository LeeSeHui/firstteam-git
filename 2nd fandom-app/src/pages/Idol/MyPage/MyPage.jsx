import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import BackButton from '../../../components/BackButton';
import useNickname from '../../../contexts/useNickname';

import starlogo from '../../../assets/mypage/starlogo.png';
import video1 from '../../../assets/mypage/video1.png';
import levelbar from '../../../assets/mypage/levelbar.png';
import './MyPage.css'; // ✅ 스타일 import






const MyPage = () => {
  const navigate = useNavigate();
  const { nickname } = useNickname();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="container">
      <BackButton label="마이페이지" />

      <h2>
        {nickname}님, <br />
        오늘도 같이 덕질 해볼까요?
      </h2>

      <p>
        <img className='star-logo' src={starlogo} alt="star" />
        <span>보유 포인트 : 180</span>
      </p>

      <div className="video-box">
        <img src={video1} alt="video" />
      </div>

      <div className="challenge-section">
        <div className="day">D+160</div>
        <p>
          {nickname}님, 오늘의 챌린지를 통해<br />목표에 달성해보아요!
        </p>
        <span>별별이 L.1</span>
        <img src={levelbar} alt="level bar" />
        <span>조금만 더 가면 Lv.2에 달성해요</span>
      </div>

      <div className="category-section">
        <button onClick={() => navigate('/idol/mypage/collection')}>나의 컬렉션</button>
        <button onClick={() => navigate('/idol/mypage/payment')}>결제내역(멤버십관리)</button>
        <button onClick={() => navigate('/idol/mypage/media')}>최근 본 미디어</button>
       
       {/* 다크모드 토글 */}
        <button className="setting-button">
        <span className="setting-label">어플설정(다크모드 알림 설정)</span>
        <div className="toggle-switch">
            <span
              className={`toggle-option ${darkMode ? 'active' : ''}`}
              onClick={() => !darkMode && toggleTheme()}  // 다크모드 켜기
            >
              on
            </span>
            <span
              className={`toggle-option ${!darkMode ? 'active' : ''}`}
              onClick={() => darkMode && toggleTheme()}   // 다크모드 끄기
            >
              off
            </span>
          </div>
        </button>
      </div>

      <div className="challenge-button-section">
        <button onClick={() => navigate('/idol/home/vote')}>📌 투표하기</button>
        <button onClick={() => navigate('/idol/home/quiz')}>📘 퀴즈풀기</button>
      </div>
    </div>
  );
};

export default MyPage;
