import React, { useState } from 'react';
import './Manual.css';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import manual1 from '../../assets/Manual/manual1.png';
import manual2 from '../../assets/Manual/manual2.png';
import manual3 from '../../assets/Manual/manual3.png';
import manual4 from '../../assets/Manual/idol-mypage-char.png';

const manualData = [
  {
    img: manual1,
    title: '내가 서포트 하는 아티스트에게\n투표해 보세요',
    desc: '아티스트와 대화하며 서로의 일상을 공유해보세요. ',
  },
  {
    img: manual2,
    title: '아티스트와 실시간으로 소통해보세요!',
    desc: '라이브로 아티스트와 실시간으로 소통해요.',
  },
  {
    img: manual3,
    title: '아티스트 사진을 보관해 보아요',
    desc: '아티스트 사진을 나만의 컬렉션에서 보관해보세요.',
  },
  {
    img: manual4,
    title: '레벨을 달성해서\n나만의 뉴비를 만나보세요!',
    desc: '전설의 뉴비가 되기까지, 여러번의 진화를\n지켜봐주세요.',
  },
];

const Manual = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < manualData.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate('/onboarding/select-artist');
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
    <div>
      <header>
      <BackButton onClick={handleBack} />
        <button className="skip-btn" onClick={() => navigate('/onboarding/select-artist')}>건너뛰기</button>
      </header>
      <div className="manual-container">
      <div className="manual-content">
        <img src={manualData[current].img} alt={`manual${current + 1}`} className={`manual-img ${current === 3 ? 'manual-last-img' : ''}`}  />
        <h2>
          {manualData[current].title.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>{line}<br /></React.Fragment>
          ))}
        </h2>
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
    </div>
    
  );
};

export default Manual;
