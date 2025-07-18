import React from 'react';
import { useNavigate,  useLocation } from 'react-router-dom';
import './Welcome.css'; // CSS 파일 이름은 자유롭게!
import BackButton from '../../components/BackButton';
import welcome from '../../assets/onboarding/welcome.png';

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nickname = location.state?.nickname || '말티즈';

  const handleStart = () => {
    // IdolHome으로 nickname 전달
    navigate('/idol/home', { state: { nickname } });
  };

  return (
    <div className="welcome-container">
      <BackButton/>
      <p className="level-text">Level 1</p>

      <div className="image-box">
        <img src={welcome} alt="character" />
      </div>

      <h2>환영해요 !</h2>
      <p className="sub">활발한 덕질은 별별이를 성장시켜요!</p>

      <button className="start-btn" onClick={handleStart}>시작하기</button>
    </div>
  );
};

export default Welcome;
