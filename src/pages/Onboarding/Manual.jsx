import React, { useState } from 'react';
import './Manual.css';
import { useNavigate } from 'react-router-dom';
import manual1 from '../../assets/Manual/idol-mypage-char.png';

const manualData = [
  {
    img: manual1,
    title: '레벨을 달성해서 스타를 만나보세요!',
    desc: '전설의 서영이 되기까지, 여러분의 진행을 지켜봐주세요.',
  },
  {
    img: manual1,
    title: '스와이프로 팬미팅 정보 확인!',
    desc: '최신 팬미팅과 이벤트 소식을 받아보세요.',
  },
  {
    img: manual1,
    title: '미션을 완료하고 보상을 받으세요!',
    desc: '다양한 미션으로 재미와 보상을 동시에!',
  },
  {
    img: manual1,
    title: '나만의 굿즈를 만들어보세요!',
    desc: '특별한 팬 경험을 위한 굿즈 제작 기회.',
  },
];

const Manual = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < manualData.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate('/idol/home');
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="manual-container">
      <button className="back-btn" onClick={handleBack}>←</button>
      <div className="manual-content">
        <img src={manualData[current].img} alt={`manual${current + 1}`} className="manual-img" />
        <h2>{manualData[current].title}</h2>
        <p>{manualData[current].desc}</p>
        <div className="dot-container">
          {manualData.map((_, index) => (
            <span key={index} className={`dot ${index === current ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="manual-btn">
        {current < manualData.length - 1 ? '다음' : '다음'}
      </button>
    </div>
  );
};

export default Manual;
