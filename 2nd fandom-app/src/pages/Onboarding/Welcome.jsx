import React from 'react';
import { useNavigate } from 'react-router-dom';
import  useNickname  from '../../contexts/useNickname';
import './Welcome.css'; // CSS 파일 이름은 자유롭게!
import BackButton from '../../components/BackButton';
import welcome from '../../assets/onboarding/welcome.png';
import YellowButton from '../../components/YellowButton';
import icon from '../../assets/onboarding/hi.png'

const Welcome = () => {
  
  const navigate = useNavigate();
  const { nickname } = useNickname();

  const handleStart = () => {
    // IdolHome으로 nickname 전달
    navigate('/idol/home', { state: { nickname } });
  };

  return (
    <div>
      <header>
        <BackButton/>
      </header>
      <div className="welcome-container">
        
        
        <h2>{nickname}님! 반가워요 <span className='welcome-icon'><img src={icon} alt="" /></span></h2>
        <p className="sub">최애와 함께, 지금 떠나볼까요?</p>

        <div className="image-box">
          <img src={welcome} alt="character" />
        </div>
        <p className="level-text">Level 1</p>

        <YellowButton label='시작하기' onClick={handleStart}/>
      </div>
    </div>
    
  );
};

export default Welcome;
