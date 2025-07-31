import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BackButton from '../../components/BackButton';

import '../../index.css';
import './Manual.css';

import manualSlide1 from '../../assets/manual/manual1-1.png';
import manualSlide2 from '../../assets/manual/manual1-2.png';
import manualSlide3 from '../../assets/manual/manual1-3.png';
import manual2Img from '../../assets/manual/manual3.png';
import manual5Img from '../../assets/manual/manual4.png';
import swipeImg from '../../assets/manual/swipe_icon.png'
import extraImg from '../../assets/onboarding/nickname_img.png'


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

const manualData = [
  {
    title: '세 가지 테마,\n하나의 팬덤 플랫폼!',
    desc: '아이돌 · 트로트 · 배우 나만의 아티스트를 고를 수 있어요.',
    image: null,
    imagePosition: 'none',
    textPosition: 'bottom',
  },
  {
    title: '나만의 아티스트를\n선택하세요!',
    desc: '나의 관심사에 맞춰 메인홈이 자동 구성되어요.',
    image: null,
    imagePosition: 'none',
    textPosition: 'bottom',
  },
  {
    title: '아티스트의 스타일,\n이제 내 손 안에!',
    desc: '최애의 착장 정보와 브랜드를 한눈에 확인 가능해요.',
    image: manual2Img,
    imagePosition: 'none',
    textPosition: 'center',
  },
  {
    title: '덕력은 쌓이고, 캐릭터는 성장한다!',
    desc: '내 아티스트 맞춤 퀴즈로 덕력을 키워보세요.',
    image: manual5Img,
    textPosition: 'center',
    extraImage: {
      src: extraImg,
      className: 'manual4-floating-img'
    }
  }
];

const marqueeImages = [
  marquee1, marquee2, marquee3, marquee4, marquee5,
  marquee6, marquee7, marquee8, marquee9, marquee10,
];

const originalSlides = [manualSlide1, manualSlide2, manualSlide3];
const carouselSlides = [...originalSlides, ...originalSlides, ...originalSlides];
const centerIndex = originalSlides.length;

const Manual = () => {
  const [innerSlide, setInnerSlide] = useState(centerIndex);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const initialSlide = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setInnerSlide(prev => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (innerSlide === carouselSlides.length - 1) {
      setTimeout(() => setInnerSlide(centerIndex), 100);
    }
  }, [innerSlide]);

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
        <button className="manual-skip-btn" onClick={() => navigate('/story')}>
          Skip
        </button>
      </header>

      <div className="manual-track" style={{ transform: `translateX(-${current * 100}vw)` }}>
        {manualData.map((item, index) => (
          <div
            className={`manual-page ${index === 0 ? 'manual-page--first' : ''}`}
            key={index}
          >
            {index === 0 && (
              <div className="manual1-carousel carousel-centered-only">
                <Slider
                  key={`carousel-${initialSlide}`}
                  centerMode
                  centerPadding="0px"
                  slidesToShow={3}
                  initialSlide={1}
                  infinite
                  autoplay
                  speed={300}
                  arrows={false}
                  dots={false}
                >
                  {originalSlides.map((img, i) => (
                    <div key={i} className="manual-slide">
                      <div className="manual-slide-inner">
                        <img src={img} alt={`slide-${i}`} />
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="swipe-wrapper">
                  {/* <img src={swipeImg} alt="swipe" className="swipe-img" /> */}
                </div>
              </div>
            )}

            {index === 1 && (
              <>
                <div className="marquee marquee-left">
                  <div className="marquee-content">
                    {[...marqueeImages, ...marqueeImages].map((img, i) => (
                      <img src={img} alt="idol" key={`top-${i}`} />
                    ))}
                  </div>
                </div>
                <div className="marquee marquee-right">
                  <div className="marquee-content">
                    {[...marqueeImages, ...marqueeImages].map((img, i) => (
                      <img src={img} alt="idol" key={`bottom-${i}`} />
                    ))}
                  </div>
                </div>
              </>
            )}

            {item.image && (
              <img src={item.image} alt={`manual-${index + 1}`} className="manual-img" />
            )}
            {item.extraImage && (
              <img
                src={item.extraImage.src}
                alt="extra"
                className={`extra-img ${item.extraImage.className}`}
              />
            )}


            <div className={`manual-text-wrapper ${item.textPosition || 'bottom'}`}>
            <img src={swipeImg} alt="swipe" className="swipe-img" />
              <h2>
                {item.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </h2>
              <p>
                {item.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </p>
              <div className="dot-container">
                {manualData.map((_, i) => (
                  <span key={i} className={`manual-dot ${i === current ? 'active' : ''}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manual;
