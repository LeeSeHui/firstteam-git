import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

import YellowButton from '../../components/YellowButton';

import story1 from '../../assets/onboarding/story1.png';
import story2 from '../../assets/onboarding/story2.png';
import story3 from '../../assets/onboarding/story3.png';
import story4 from '../../assets/onboarding/story4.png';
import story5 from '../../assets/onboarding/story5.png';

const isMobile = window.innerWidth <= 480;

const stories = [
  {
    background: story1,
    text: '수많은 별들 중,\n하나였던 별별이',
    position: isMobile
      ? { bottom: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
      : { bottom: '45%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    background: story2,
    text: '어느 날,\n가수의 꿈이 생겼어요.',
    position: { bottom: '10%', right: '-50%', transform: 'translate(-50%, -50%)' },
  },
  {
    background: story3,
    text: '지구별에서 꼭 \n 꿈을 이뤄야지!',
    position: { bottom: '70%', right: '-25%' },
  },
  {
    background: story4,
    text: '뉴비 엔터테이먼트에\n도착했어요!',
    position: { bottom: '38%', right: '-25%' },
  },
  {
    background: story5,
    text: '별별이는\n스타가 될 수 있을까요?',
    textPosition: { bottom: '70%', left: '50%', transform: 'translateX(-50%)' },
    buttonPosition: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
    isLast: true,
  },
];

const Story = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleLeftClick = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleRightClick = () => {
    if (currentPage < stories.length - 1) setCurrentPage(currentPage + 1);
  };

  const handleStartClick = () => {
    navigate('/onboarding/select-artist');
  };

  return (
    <div
      className="story-container story-bg"
      style={{ backgroundImage: `url(${stories[currentPage].background})` }}
    >
      <div className="clickable-area left" onClick={handleLeftClick} />
      <div className="clickable-area right" onClick={handleRightClick} />

      {/* 텍스트 출력 */}
      <div
        className="story-text"
        style={
          stories[currentPage].isLast
            ? stories[currentPage].textPosition
            : stories[currentPage].position
        }
      >
        {stories[currentPage].text.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* 버튼 출력 (마지막 페이지만) */}
      {stories[currentPage].isLast && (
        <div
          className="story-text"
          style={stories[currentPage].buttonPosition}
        >
          <YellowButton onClick={handleStartClick} label="스타 만들러가기" />
        </div>
      )}
    </div>
  );
};

export default Story;
