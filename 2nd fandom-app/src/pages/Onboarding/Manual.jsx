import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';

import marquee1 from '../../assets/artist-select/artist2.png';
import marquee2 from '../../assets/artist-select/artist3.png';
import marquee3 from '../../assets/artist-select/artist4.png';
import marquee4 from '../../assets/artist-select/artist5.png';
import marquee5 from '../../assets/artist-select/artist6.png';
import marquee6 from '../../assets/artist-select/artist7.png';
import marquee7 from '../../assets/artist-select/marquee1.png';
import marquee8 from '../../assets/artist-select/marquee2.png';
import marquee9 from '../../assets/artist-select/marquee3.png';
import marquee10 from '../../assets/artist-select/제니.png';

import './Manual.css';

const manualData = [
  {
    title: '세 가지 테마,\n하나의 팬덤 플랫폼!',
    desc: '아이돌 · 트로트 · 배우 나만의 아티스트를 고를 수 있어요.',
  },
  {
    title: '나만의 아티스트를\n선택하세요!',
    desc: '나의 관심사에 맞춰 메인홈이 자동 구성되어요.',
  },
  {
    title: '아티스트의 스타일,\n이제 내 손 안에!',
    desc: '최애의 착장 정보와 브랜드를 한눈에 확인 가능해요.',
  },
  {
    title: '덕력은 쌓이고, 캐릭터는 성장한다!',
    desc: '내 아티스트 맞춤 퀴즈로 덕력을 키워보세요.',
  },
    {
    title: '나만의 뉴비를 만나보아요!',
    desc: '덕질에 진심인 당신을 위한 팬덤 공간에 오신 걸 환영해요.',
  }
];

const marqueeImages = [
  marquee1, marquee2, marquee3, marquee4, marquee5,
  marquee6, marquee7, marquee8, marquee9, marquee10,
];

const Manual = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (current < manualData.length - 1) {
        setCurrent(current + 1);
      } else {
        navigate('/story');
      }
    },
    onSwipedRight: () => {
      if (current > 0) {
        setCurrent(current - 1);
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <div className="manual-wrapper" {...handlers}>
      <header>
        <BackButton
          onClick={() => {
            if (current > 0) setCurrent(current - 1);
            else navigate(-1);
          }}
          label=""
        />
        <button className="skip-btn" onClick={() => navigate('/story')}>
          건너뛰기
        </button>
      </header>

      <div
        className="manual-track"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {manualData.map((item, index) => (
          <div className="manual-page" key={index}>
            {/* 👉 manual 1에서만 마퀴 */}
            {index === 0 && (
              <>
                <div className="marquee marquee-left">
                  <div className="marquee-content">
                    {[...marqueeImages, ...marqueeImages].map((img, i) => (
                      <img src={img} alt="idol" key={`top-${i}`} />
                    ))}
                  </div>
                </div>
              </>
            )}

            

            {/* manual 1 아래쪽 마퀴 */}
            {index === 0 && (
              <div className="marquee marquee-right">
                <div className="marquee-content">
                  {[...marqueeImages, ...marqueeImages].map((img, i) => (
                    <img src={img} alt="idol" key={`bottom-${i}`} />
                  ))}
                </div>
              </div>
            )}
            {/* 텍스트 영역 */}
            <h2>
              {item.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <p>
              {item.desc.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            {/* 하단 페이지 인디케이터 */}
            <div className="dot-container">
              {manualData.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === current ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manual;
