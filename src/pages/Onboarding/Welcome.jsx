import React from 'react';
import { useNavigate } from 'react-router-dom';
import useNickname from '../../contexts/useNickname';
import './Welcome.css';
import BackButton from '../../components/BackButton';
import welcome from '../../assets/onboarding/welcome.png';
import YellowButton from '../../components/YellowButton';
import icon from '../../assets/onboarding/hi.png';
import confetti from 'canvas-confetti'; // 🎉 추가

const Welcome = () => {
  const navigate = useNavigate();
  const { nickname } = useNickname();

  const handleStart = () => {
    // 🎉 confetti 팡!
    confetti({
      particleCount: 150,
      spread: 180,
      startVelocity: 40,
      gravity: 0.8,
      ticks: 200,
      origin: { x: 0.5, y: 0.3 },
      colors: ['#FF5F6D', '#FF7E5F', '#FFD700', '#FF6F61', '#FF3CAC'],
      shapes: ['circle', 'square'],
    });

    // 메인 홈으로 이동 + 상태값 전달
    setTimeout(() => {
      navigate('/idol/home', {
        state: { nickname, fromWelcome: true }, // 👉 이걸로 홈에서 confetti 이어지게
      });
    }, 200); // 컴패티 연출 후 자연스럽게 넘어가게 약간 대기
  };

  return (
    <div>
      <header>
        <BackButton />
      </header>
      <div className="welcome-container">
        <h2>
          {nickname}님! 반가워요{' '}
          <span className="welcome-icon">
            <img src={icon} alt="" />
          </span>
        </h2>
        <p className="sub">최애와 함께, 지금 떠나볼까요?</p>

        <div className="image-box">
          <img src={welcome} alt="character" />
        </div>
        <p className="level-text">Level 1</p>

        <YellowButton label="시작하기" onClick={handleStart} />
      </div>
    </div>
  );
};

export default Welcome;
