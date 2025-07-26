import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useNickname from '../../../contexts/useNickname';
import Slider from 'react-slick';


import ActorArtistSection from '../../../components/ActorArtistSection';
import ActorQuizSection from '../../../components/ActorQuizSection';

import logo from '../../../assets/Home/logo.png';
import dark_logo from '../../../assets/dark/dark_logo.png';

import alarm from '../../../assets/actor/home/alarm.png';
import dark_alarm from '../../../assets/dark/dark_actor_alarm.png';

import idol_char from '../../../assets/actor/home/idol-mypage-char.png';
import artist1 from '../../../assets/actor/home/artist1.png';
import artist3 from '../../../assets/actor/home/artist2.png';
import plusIcon from '../../../assets/actor/home/plus.png';
import live01 from '../../../assets/actor/home/live1.png';
import live02 from '../../../assets/actor/home/live2.png';
import live03 from '../../../assets/actor/home/live3.png';
import artist01 from '../../../assets/actor/home/artist01.png';
import feedimg1 from '../../../assets/actor/home/artistfeed1.png';
import check from '../../../assets/actor/home/check.png';
import photo02 from '../../../assets/actor/home/photo02.png';
import photo03 from '../../../assets/actor/home/photo03.png';
import thumb1 from '../../../assets/actor/home/youtube01.png';
import thumb2 from '../../../assets/actor/home/youtube02.png';
import thumb3 from '../../../assets/actor/home/youtube03.png';
import vote01 from '../../../assets/actor/home/vote1.png';
import vote02 from '../../../assets/actor/home/vote2.png';
import vote03 from '../../../assets/actor/home/vote3.png';
import vote04 from '../../../assets/actor/home/vote4.png';
import membershipCardImg1 from '../../../assets/actor/home/membership1.png';
import membershipCardImg2 from '../../../assets/actor/home/membership2.png';
import membershipCardImg3 from '../../../assets/actor/home/membership3.png';
import membershipCardImg4 from '../../../assets/actor/home/membership4.png';

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
    { username: { nickname: '너누구야' }, message: '❤️ 너무 예뻐요!', createdAt: new Date().toISOString() },
    { username: { nickname: '너뭐이야' }, message: '휴가 잘 다녀오세요! 🌴', createdAt: new Date().toISOString() },
    { username: { nickname: '뾰루지걸' }, message: '귀척ㅋ 우웩', createdAt: new Date().toISOString() },
    { username: { nickname: '말티즈이' }, message: 'GD 오빠보면 눈 깔아라;', createdAt: new Date().toISOString() },
    { username: { nickname: '꽥괙이' }, message: '나보다 못생긴듯ㅋ', createdAt: new Date().toISOString() },
    { username: { nickname: '먺짱이' }, message: '언니 뭐 먹을거야??????????', createdAt: new Date().toISOString() },
    { username: { nickname: '종민' }, message: '세희 금요일 소주 ㄱ??', createdAt: new Date().toISOString() },
  ]);

  const [totalCommentCount, setTotalCommentCount] = useState(comments.length);
  const MAX_COMMENTS = 7;

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
  const handleMypageClick = () => navigate('/actor/mypage');
  const handleArtistClick = () => navigate('/idol/artist/highlight');
  const handlePlusClick = () => navigate('/onboarding/select-artist', { state: { fromHome: true } });
  const handleLiveClick = () => navigate('/idol/home/live');
  const handleVoteCardClick = () => navigate('/idol/home/vote');
  const handleQuizClick = () => navigate('/idol/home/quiz');

  const membershipData = [
    {
      id: 1,
      title: '<악한영웅> 촬영장\n최현욱 커피차 인원 모집',
      desc: '7월 1일 4:30PM (KST)\n신청서 제출 하러가기',
      img: membershipCardImg1,
      current: '1',
      total: '4',
    },
    {
      id: 2,
      title: '변우석 친필 폴라로이드\n이벤트 OPEN!',
      desc: '변우석 친필 폴라 이벤트 참여하세요.',
      img: membershipCardImg2,
      current: '2',
      total: '4',
    },
    {
      id: 3,
      title: "지금 진행 중인\n다양한 이벤트를 만나보세요!",
      desc: '드라마 <견우와 직녀>\n스트리밍 최초 공개 ',
      img: membershipCardImg3,
      current: '3',
      total: '4',
    },
    {
      id: 4,
      title: "지금 진행 중인\n다양한 이벤트를 만나보세요!",
      desc: '배우 김지원 미공개 \n촬영 비하인드 최초공개',
      img: membershipCardImg4,
      current: '4',
      total: '4',
    }
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
            <button className='button2' onClick={(e) => { e.stopPropagation(); handleArtistClick(); }}>
              <img src={artist1} alt="artist1" />
            </button>
            <button className='button2' onClick={(e) => { e.stopPropagation(); handleArtistClick(); }}>
              <img src={artist3} alt="artist3" />
            </button>
            <button className='button2' onClick={(e) => { e.stopPropagation(); handlePlusClick(); }}>
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
        <div className="swipe">
          <p className="liveImg" onClick={handleLiveClick}><img src={live01} alt="" /></p>
          <p className="liveImg" onClick={handleLiveClick}><img src={live02} alt="" /></p>
          <p className="liveImg" onClick={handleLiveClick}><img src={live03} alt="" /></p>
        </div>
      </div>

      <ActorArtistSection
        profileImage={artist01}
        artistName="윤정"
        isVerified={true}
        verifiedIcon={check}
        postTime="07.01. 05:06"
        postText={`푹 쉬다가 촬영장 복귀!\n모두 월요팅 하시구 곧 만나용 `}
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
        <p>JUST FOR {nickname}</p>
        <div className="videoSwipe">
          <a href="https://www.youtube.com/watch?v=CHp0Kaidr14" target="_blank" rel="noopener noreferrer" className="videoCard">
            <img src={thumb1} alt="video1" />
            <p>박보검 뮤직뱅크 월드투어 <br />IN 벨기에 BEHIND FILM</p>
          </a>
          <a href="https://www.youtube.com/watch?v=o9DhvbqYzns" target="_blank" rel="noopener noreferrer" className="videoCard">
            <img src={thumb2} alt="video2" />
            <p>고윤정의 소울푸드는?  <br /> ELLE KOREA</p>
          </a>
          <a href="https://www.youtube.com/watch?v=lmJPeFW75qQ" target="_blank" rel="noopener noreferrer" className="videoCard">
            <img src={thumb3} alt="video3" />
            <p>변우석의 브이로그<br />
            WHAT HAPPENED IN MILAN</p>
          </a>
        </div>
      </div>

      <ActorQuizSection handleQuizClick={handleQuizClick} />

      <div className="voteSection">
        <div className="swipe vote">
          <div className="voteRow">
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote01} alt="vote1" />
              <div className="voteText"><span>[798회] KBS 뮤직뱅크 <br /> K-Chart 1위 후보 투표</span></div>
            </div>
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote02} alt="vote2" />
              <div className="voteText"><span>7월 첫째주 <br /> 당신의 마음을 울린 아이돌은?</span></div>
            </div>
          </div>
          <div className="voteRow offset">
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote03} alt="vote3" />
              <div className="voteText"><span>케이팝 코스프레 1위는?</span></div>
            </div>
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote04} alt="vote4" />
              <div className="voteText"><span>[808회] KBS 인기가요 <br /> K-Chart 1위 후보 투표</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="membershipSection Section">
        <Slider {...sliderSettings}>
          {membershipData.map((item) => (
            <div key={item.id} className="membershipCard">
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
