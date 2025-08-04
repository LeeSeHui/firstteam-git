import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
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

const carouselSlides = [manualSlide1, manualSlide2, manualSlide3];

const marqueeImages = [
  marquee1, marquee2, marquee3, marquee4, marquee5,
  marquee6, marquee7, marquee8, marquee9, marquee10,
];

const manualData = [
  {
    title: '세 가지 테마,\n하나의 팬덤 플랫폼!',
    desc: '아이돌 · 트로트 · 배우 나만의 아티스트를 고를 수 있어요.',
    contentType: 'carousel',
  },
  {
    title: '나만의 아티스트를\n선택하세요!',
    desc: '나의 관심사에 맞춰 메인홈이 자동 구성되어요.',
    contentType: 'marquee',
  },
  {
    title: '아티스트의 스타일,\n이제 내 손 안에!',
    desc: '최애의 착장 정보와 브랜드를 한눈에 확인 가능해요.',
    contentType: 'image',
    image: manual2Img,
  },
  {
    title: '덕력은 쌓이고, 캐릭터는 성장한다!',
    desc: '내 아티스트 맞춤 퀴즈로 덕력을 키워보세요.',
    contentType: 'image',
    image: manual5Img,
    extraImage: {
      src: extraImg,
      className: 'manual4-floating-img',
    },
  }
];

const Manual = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="manual-wrapper">
      <header>
        <BackButton onClick={() => {
          if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
          else navigate(-1);
        }} />
        <button className="manual-skip-btn" onClick={() => navigate('/story')}>
          Skip
        </button>
      </header>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex);
          if (swiper.activeIndex === manualData.length - 1) {
            setTimeout(() => navigate('/story'), 300);
          }
        }}
      >
        {manualData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="manual-page">
              {/* 캐러셀 */}
              {item.contentType === 'carousel' && (
                <div className="manual1-carousel carousel-centered-only">
                  <div className="carousel-track">
                    {carouselSlides.map((img, i) => (
                      <div key={i} className="manual-slide">
                        <div className="manual-slide-inner">
                          <img src={img} alt={`slide-${i}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 마퀴 */}
              {item.contentType === 'marquee' && (
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

              {/* 단일 이미지 */}
              {item.contentType === 'image' && item.image && (
                <img src={item.image} alt={`manual-${index}`} className="manual-img" />
              )}

              {/* 추가 이미지 */}
              {item.extraImage && (
                <img
                  src={item.extraImage.src}
                  alt="extra"
                  className={`extra-img ${item.extraImage.className}`}
                />
              )}

              {/* 텍스트 + 도트 + 스와이프 아이콘 */}
              <div className={`manual-text-wrapper ${index < 2 ? 'bottom' : 'center'}`}>
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
                    <span key={i} className={`manual-dot ${i === currentIndex ? 'active' : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Manual;