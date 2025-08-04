import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useNickname from '../../../contexts/useNickname';
import Slider from 'react-slick';
import { Grid } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/grid';


import ArtistSection from '../../../components/ArtistSection';
import QuizSection from '../../../components/QuizSection';

import logo from '../../../assets/Home/logo.png';
import dark_logo from '../../../assets/dark/dark_logo.png';

import alarm from '../../../assets/Home/alarm.png';
import dark_alarm from '../../../assets/dark/dark_alarm.png';

import idol_char from '../../../assets/Home/home-char.png';
import artist1 from '../../../assets/Home/artist1.png';
import plusIcon from '../../../assets/Home/plus.png';
import live01 from '../../../assets/Home/live1.png';
import live02 from '../../../assets/Home/live2.png';
import live03 from '../../../assets/Home/live3.png';
import artist01 from '../../../assets/artist-select/herin.png';
import feedimg1 from '../../../assets/artist/artistfeed1.png';
import check from '../../../assets/Home/check.png';
import photo02 from '../../../assets/Home/photo02.png';
import photo03 from '../../../assets/Home/photo03.png';
import thumb1 from '../../../assets/Home/youtube01.png';
import thumb2 from '../../../assets/Home/youtube02.png';
import thumb3 from '../../../assets/Home/youtube03.png';
import playIcon from '../../../assets/Home/play.png';

import vote1 from '../../../assets/Home/vote1.png'
import vote2 from '../../../assets/Home/vote2.png'
import vote3 from '../../../assets/Home/vote3.png'
import vote4 from '../../../assets/Home/vote4.png'
import vote5 from '../../../assets/Home/vote5.png'
import vote6 from '../../../assets/Home/vote6.png'

import membershipCardImg from '../../../assets/Home/membership.png';
import membershipCardImg2 from '../../../assets/Home/membership2.png';
import membershipCardImg3 from '../../../assets/Home/membership3.png';

import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const navigate = useNavigate();
  const { nickname } = useNickname();
  const [newComment, setNewComment] = useState('');
  const isDarkMode = document.body.classList.contains('dark');

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(timestamp)) / 1000);
    if (diff < 60) return '방금 전';
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    return `${Math.floor(diff / 86400)}일 전`;
  };

  const [comments, setComments] = useState([
    { username: { nickname: '너누구야' }, message: '너무 예뻐요!❤️', createdAt: new Date().toISOString() },
    { username: { nickname: '너뭐이야' }, message: '휴가 잘 다녀오세요! 🌴❤️', createdAt: new Date().toISOString() },
    { username: { nickname: '뾰루지걸' }, message: '너무 귀여워요ㅜㅜ❤️❤️', createdAt: new Date().toISOString() },
    { username: { nickname: '말티즈이' }, message: 'GD 오빠보다 뉴진스!', createdAt: new Date().toISOString() },
    { username: { nickname: '꽥괙이' }, message: '네일아트 바꿨어용?!', createdAt: new Date().toISOString() },
    { username: { nickname: '먺짱이' }, message: '오늘 점심은 뭐 먹나용?????', createdAt: new Date().toISOString() },
    { username: { nickname: 'jongbae' }, message: '핫써머!!', createdAt: new Date().toISOString() },
  ]);

  const [totalCommentCount, setTotalCommentCount] = useState(comments.length);
  const MAX_COMMENTS = 7;

  const handleDeleteComment = (index) => {
    const updated = [...comments];
    updated.splice(index, 1);
    setComments(updated);
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    const newObj = { username: { nickname }, message: newComment, createdAt: new Date().toISOString() };



    let updatedComments = [...comments, newObj];
    if (updatedComments.length > MAX_COMMENTS) {
      updatedComments = updatedComments.slice(updatedComments.length - MAX_COMMENTS);
    }

    setComments(updatedComments);
    setNewComment('');
    setTotalCommentCount((prev) => prev + 1);
  };

  const AlarmClick = () => navigate('/idol/home/alarm');
  const handleMypageClick = () => navigate('/idol/mypage');
  const handleArtistClick = () => navigate('/idol/artist/highlight');
  const handlePlusClick = () => navigate('/onboarding/select-artist', { state: { fromHome: true } });
  const handleLiveClick = () => navigate('/idol/home/live');
  const handleVoteCardClick = () => navigate('/idol/home/vote');
  const handleMembershipClick = () => navigate('/idol/home/membership');
  const handleQuizClick = () => navigate('/idol/home/quiz');

  const membershipData = [
    {
      id: 1,
      title: '블랙핑크 제니 첫 솔로앨범\nYoutube Live',
      desc: '7월 1일 4:30PM (KST)\n라이브 한정 특전 제공!',
      img: membershipCardImg,
      current: '1',
      total: '3',
    },
    {
      id: 2,
      title: 'G-Dragon 88명 한정\n티셔츠 OPEN!',
      desc: '7월 2일 18:00PM (KST)\n오직 Coupang에서 구매 가능',
      img: membershipCardImg2,
      current: '2',
      total: '3',
    },
    {
      id: 3,
      title: "뉴진스의 ‘자컨 필살기'\n소개서 지금 바로 확인!",
      desc: '뉴진스의 자체 콘텐츠\n보러가기',
      img: membershipCardImg3,
      current: '3',
      total: '3',
    },
  ];

    const voteData = [
    { id: 1, img: vote1, text: '[798회] KBS 뮤직뱅크 <br /> K-Chart 1위 후보 투표' },
    { id: 2, img: vote2, text: '7월 첫째주 <br /> 당신의 마음을 울린 아이돌은?' },
    { id: 3, img: vote3, text: '[600회] KBS 인기가요 <br /> K-Chart 1위 후보 투표' },
    { id: 4, img: vote4, text: '케이팝 코스프레 1위는?' },
    { id: 5, img: vote5, text: '[808회] KBS 인기가요 <br /> K-Chart 1위 후보 투표' },
    { id: 6, img: vote6, text: '감성 가득 셀카장인 <br /> 여자 아이돌은?' },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    
      <div className="homeContainer">
      <div className="main-logo">
        <p className="img main"><img
          src={isDarkMode ? dark_logo : logo}
          alt="logo"
        /></p>
        <p className="img2 alarm" onClick={AlarmClick}><img src={isDarkMode ? dark_alarm : alarm} alt="alarm" /></p>
      </div>

      <div className="mypageSection Section" onClick={handleMypageClick}>
        <div className="left">
          <p>{nickname}님!<br /> 오늘도 우리 함께 <br /> 행복한 덕질해요! </p>
          <div className="artistButtons">
            <button onClick={(e) => { e.stopPropagation(); handleArtistClick(); }}>
              <img src={artist1} alt="artist1" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handlePlusClick(); }}>
              <img src={plusIcon} alt="plus" />
            </button>
          </div>
        </div>
        <div className="right">
          <img src={idol_char} alt="idol character" />
        </div>
      </div>

      <div className="liveSection">
        <p>LIVE NOW!</p>
        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          grabCursor={true}
        >
        <SwiperSlide className="live-slide">
          <div className="liveImg" onClick={handleLiveClick}>
            <img src={live02} alt="" />
            <span className="liveBadge">LIVE</span>
            <div className="liveTextBox">
              <p className="artist">NewJeans</p>
              <p className="title">1주년 LIVE<br />7/25 18:00</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="live-slide">
          <div className="liveImg" onClick={handleLiveClick}>
            <img src={live01} alt="" />
            <div className="liveTextBox">
              <p className="artist">NewJeans</p>
              <p className="title">2025 MAMA<br />AWARDS</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="live-slide">
          <div className="liveImg" onClick={handleLiveClick}>
            <img src={live03} alt="" />
            <div className="liveTextBox">
              <p className="artist">NewJeans</p>
              <p className="title">M/V BEHIND<br />7/30 12:00</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

      <ArtistSection
        nickname={nickname}
        handleDeleteComment={handleDeleteComment}
        profileImage={artist01}
        artistName="해린"
        isVerified={true}
        verifiedIcon={check}
        postTime="07.01. 05:06"
        postText={`멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜`}
        feedImage={feedimg1}
        photo02={photo02}
        photo03={photo03}
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
        totalCommentCount={totalCommentCount}
        onProfileClickPath="/idol/artist/highlight"
        getTimeAgo={getTimeAgo}
      />

      <div className="videoSection">
        <p>JUST FOR {nickname} 💖</p>
        <Swiper
          spaceBetween={65}            // 카드 간 간격
          slidesPerView={'auto'}       // 카드 크기만큼 보여줌
          grabCursor={true}            // 손 모양 커서
        >
          {[thumb1, thumb2, thumb3].map((thumb, i) => (
            <SwiperSlide key={i} style={{ width: '190px', height:'200px' }}>
              <a
                href={['https://www.youtube.com/watch?v=yFTAYXDTjqI', 'https://www.youtube.com/watch?v=lmJPeFW75qQ', 'https://www.youtube.com/watch?v=7FbDF0wWe_8'][i]}
                target="_blank"
                rel="noopener noreferrer"
                className="videoCard"
              >
                <img src={thumb} alt={`video${i + 1}`} className="videoThumb" />
                <div className="playIconWrapper">
                  <img src={playIcon} alt="play" className="playIcon" />
                </div>
                <p>
                  {[
                    "'최초 공개' NewJeans의 HOT 컴백 무대 @SHOWMUSICBANK",
                    "뉴진스 하니직캠 4K 'Hype Boy' @MCOUNTDOWN",
                    "뉴진스 'Right Now' <br />Bonus Ver @뮤직뱅크",
                  ][i]}
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <QuizSection handleQuizClick={handleQuizClick} />

      <div className="voteSection">
        <Swiper
          modules={[Grid]}
          spaceBetween={10}
          slidesPerView={'auto'} // 한 열에 2개씩
          grid={{
            rows: 2,        // 총 2줄
            fill: 'row',    // 슬라이드 순서를 row 방향으로 채움
          }}
          grabCursor={true}
        >
          {voteData.map((vote, idx) => (
            <SwiperSlide key={vote.id} style={{width:'290px'}}>
              <div
                className={
                  idx <= 2
                    ? 'shift-wrapper shift-right'
                    : idx >= 3 && idx <= 5
                    ? 'shift-wrapper shift-left'
                    : ''
                }
              >
                <div className="voteCard" onClick={handleVoteCardClick}>
                  <p className="vote-tit">투표 D-3</p>
                  <img src={vote.img} alt={`vote${idx + 1}`} />
                  <div className="voteText">
                    <span dangerouslySetInnerHTML={{ __html: vote.text }} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="membershipSection Section">
        <Slider {...sliderSettings}>
          {membershipData.map((item) => (
            <div key={item.id} className="membershipCard" onClick={handleMembershipClick}>
              <img src={item.img} alt="membership card" className="membershipBg" />
              <div className="membershipOverlay">
                <p className="group">Event</p>
                <h2>
                  {item.title.split("\n").map((word, idx) => (
                    <React.Fragment key={idx}>{word}<br /></React.Fragment>
                  ))}
                </h2>
                <p className="desc">
                  {item.desc.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br /></React.Fragment>
                  ))}
                </p>
              </div>
              <div className="indicator">
                <span className="current">{item.current}</span>
                <span className="total"> | {item.total}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default Home;
