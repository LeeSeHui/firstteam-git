import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import BackButton from '../../../components/BackButton';
import './Chat.css';

import slide1 from '../../../assets/dm/slide1.png';
import slide2 from '../../../assets/dm/slide2.png';
import slide3 from '../../../assets/dm/slide3.png';

import check_icon from '../../../assets/home/check.png'
import search from '../../../assets/dm/search.png'

import roseImg from '../../../assets/dm/img1.png';
import jennieImg from '../../../assets/dm/img2.png';
import haniImg from '../../../assets/dm/img3.png';
import haerinImg from '../../../assets/dm/img4.png';
import img5 from '../../../assets/dm/img5.png'
import img6 from '../../../assets/dm/img6.png'
import img7 from '../../../assets/dm/img7.png'
import img8 from '../../../assets/dm/img8.png'
import img9 from '../../../assets/dm/img9.png'
import img10 from '../../../assets/dm/img10.png'
import img11 from '../../../assets/dm/img11.png'
import img12 from '../../../assets/dm/img12.png'

const slideData = [
  { id: 1, title: 'DM 오픈!', sub: 'KiKi', image: slide1 },
  { id: 2, title: 'DM 오픈!', sub: 'NCT - MARK', image: slide2 },
  { id: 3, title: 'DM 오픈!', sub: 'ILLIT - WONHEE', image: slide3 },
];

const profileData = [
  { name: 'ROSE', img: roseImg, hasNew: true },
  { name: 'JENNIE', img: jennieImg, hasNew: true },
  { name: 'HANI', img: haniImg, hasNew: false },
  { name: 'HAERIN', img: haerinImg, hasNew: false },
];

const recommendArtists = [
  { id: 1, name: '유진', en: 'YUJIN', time: '방금', img: img5 },
  { id: 2, name: '원영', en: 'WONYOUNG', time: '2시간 전', img: img6 },
  { id: 3, name: '예지', en: 'YEJI', time: '5시간 전', img: img7 },
  { id: 4, name: '카리나', en: 'KARINA', time: '18시간 전', img: img8 },
  { id: 5, name: '닝닝', en: 'NINGNING', time: '20시간 전', img: img9},
  { id: 6, name: '배이', en: 'BAEI', time: '2일 전', img: img10  },
  { id: 7, name: '민니', en: 'MINNI', time: '6일 전', img: img11 },
  { id: 8, name: '미연', en: 'MIYEON', time: '7일 전', img: img12 },
];

const Chat = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // ✅ 자동 넘김 활성화
    autoplaySpeed: 2000,
  };

  return (
    <div className="chat-page">
      <BackButton label="DM" />

      {/* 상단 슬라이더 */}
      <div className="chat-slider-wrapper">
        <Slider ref={sliderRef} {...settings}>
          {slideData.map((slide, idx) => (
            <div key={slide.id}>
              <div className="chat-slide">
                <div className="slide-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.sub}</p>
                </div>
                <img src={slide.image} alt={slide.title} className="slide-img" />
                <div className="slide-index">{`0${idx + 1} | 0${slideData.length}`}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
      <div className="profile-slider-box">
      <p className="section-title">Message</p>
      <div className="profile-slider">
        {profileData.map((artist, i) => (
          <div
            className="profile-item"
            key={i}
            onClick={() => navigate(`/chatroom/${artist.name.toLowerCase()}`)} // ⬅ 클릭 시 이동
            style={{ cursor: 'pointer' }}
          >
            <div className="profile-img-wrap">
              <img src={artist.img} alt={artist.name} />
              {artist.hasNew && <span className="red-dot" />}
            </div>
            <p className="profile-name">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>


      {/* 검색창 */}
      <div className="search-box">
        <img src={search} alt="" />
        <input type="text" placeholder="아티스트의 이름을 입력하세요." />
      </div>

      {/* 추천 아티스트 */}
      <div className="recommend-list">
        <p className="section-title">추천 아티스트</p>
        {recommendArtists.map((a) => (
          <div className="artist-item" key={a.id}>
            <img src={a.img} alt={a.name} className="artist-img" />
            <div className="artist-info">
              <p className="artist-name">
                {a.name} <img src={check_icon} alt="v" className="check-icon" />
              </p>
              <p className="artist-en">{a.en}</p>
            </div>
            <span className="artist-time">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
