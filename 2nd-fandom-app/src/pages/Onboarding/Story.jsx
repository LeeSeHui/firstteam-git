import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

import YellowButton from '../../components/YellowButton';

import story1 from '../../assets/onboarding/story1.png'
import story2 from '../../assets/onboarding/story2.png'
import story3 from '../../assets/onboarding/story3.png'
import story4 from '../../assets/onboarding/story4.png'
import story5 from '../../assets/onboarding/story5.png'

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
    text: '어느 날,\n가수의 꿈이 생겨\n지구로 가고있어요!',
    position: { bottom: '10%', right:'-25%'},
  },
  {
    background: story3,
    text: ''
  },
  {
    background: story4,
    text: 'Nuvie 엔터테이먼트에\n무사히 도착했어요!',
    position: { bottom: '5%', right: '-20%' },
  },
  {
    background: story5,
    text: '스타 만들러가기',
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

    {!stories[currentPage].isLast ? (
  <div
    className="story-text"
    style={stories[currentPage].position}
  >
    {stories[currentPage].text.split('\n').map((line, i) => (
      <p key={i}>{line}</p>
    ))}
  </div>
) : (
  <div
    className="story-text"
    style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
  >
    <YellowButton onClick={handleStartClick} label="스타 만들러가기" />
  </div>
)}
</div>
);
};

export default Story;
