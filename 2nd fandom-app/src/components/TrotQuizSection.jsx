import React, { useState, useEffect } from 'react';
import PupleButton from './PupleButton';
import clockicon from '../assets/trot/home/clock.png';
import quizstar from '../assets/trot/home/idol-mypage-char.png';
import './TrotQuizSection.css';

const TrotQuizSection = ({ handleQuizClick }) => {
  const [timeLeft, setTimeLeft] = useState(5300); // 1시간 27분 30초

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="quiz-section Section">
      <div className="quiz-content">
        <div className="quiz-left">
          <h3>
            오늘의 <span className="trot-highlight">QUIZ</span><br />
            지금 바로 도전
          </h3>
          <p className="timer">
            <img src={clockicon} alt="clock" />
            <span className="trot-time">{formatTime(timeLeft)}</span> 후 퀴즈 종료
          </p>
        </div>
        <div className="quiz-right">
          <img src={quizstar} alt="quiz star" />
        </div>
      </div>

      <div className="quiz-button">
        <PupleButton label="퀴즈 바로가기" onClick={handleQuizClick} />
      </div>
    </div>
  );
};

export default TrotQuizSection;
