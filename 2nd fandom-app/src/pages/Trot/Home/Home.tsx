// ✅ 최종 수정된 Trot/Home.tsx (TypeScript)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useNickname from '../../../contexts/useNickname';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TrotArtistSection from '../../../components/TrotArtistSection';
import TrotQuizSection from '../../../components/TrotQuizSection';

import logo from '../../../assets/Home/logo.png';
import dark_logo from '../../../assets/dark/dark_logo.png';

import alarm from '../../../assets/trot/home/alarm.png';
import dark_alarm from '../../../assets/dark/dark_trot_alarm.png';

import idol_char from '../../../assets/trot/home/idol-mypage-char.png';
import artist1 from '../../../assets/trot/home/artist1.png';
import artist3 from '../../../assets/trot/home/artist2.png';
import plusIcon from '../../../assets/trot/home/plus.png';
import live01 from '../../../assets/trot/home/live1.png';
import live02 from '../../../assets/trot/home/live2.png';
import live03 from '../../../assets/trot/home/live3.png';
import artist01 from '../../../assets/trot/home/artist01.png';
import feedimg1 from '../../../assets/trot/home/artistfeed1.png';
import check from '../../../assets/trot/home/check.png';
import photo02 from '../../../assets/trot/home/photo02.png';
import photo03 from '../../../assets/trot/home/photo03.png';
import thumb1 from '../../../assets/trot/home/youtube01.png';
import thumb2 from '../../../assets/trot/home/youtube02.png';
import thumb3 from '../../../assets/trot/home/youtube03.png';
import playIcon from '../../../assets/Home/play.png';

import vote01 from '../../../assets/trot/home/vote1.png';
import vote02 from '../../../assets/trot/home/vote2.png';
import vote03 from '../../../assets/trot/home/vote3.png';
import vote04 from '../../../assets/trot/home/vote4.png';
import vote05 from '../../../assets/trot/home/vote5.png';
import vote06 from '../../../assets/trot/home/vote6.png';

import membershipCardImg1 from '../../../assets/trot/home/membership1.png';
import membershipCardImg2 from '../../../assets/trot/home/membership2.png';
import membershipCardImg3 from '../../../assets/trot/home/membership3.png';

import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ===== Types =====
interface Username {
  nickname: string;
}

interface FeedComment {
  username: Username;
  message: string;
  createdAt: string; // ISO string
}

interface MembershipCard {
  id: number;
  title: string; // \n 포함 가능
  desc: string; // \n 포함 가능
  img: string;
  current: string;
  total: string;
}

const Home = (): React.FC => {
  const navigate = useNavigate();
  const { nickname } = useNickname();
  const [newComment, setNewComment] = useState<string>('');
  const isDarkMode = typeof document !== 'undefined' && document.body.classList.contains('dark');

  const getTimeAgo = (timestamp: string | number | Date): string => {
    const now = new Date();
    const diff = Math.floor((+now - +new Date(timestamp)) / 1000);
    if (diff < 60) return '방금 전';
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    return `${Math.floor(diff / 86400)}일 전`;
  };

  const [comments, setComments] = useState<FeedComment[]>([
    { username: { nickname: 'who' }, message: '강아지 너무 귀엽다❤️', createdAt: new Date().toISOString() },
    { username: { nickname: '영웅맘' }, message: '휴일 잘 보내! 🌴', createdAt: new Date().toISOString() },
    { username: { nickname: '영웅최고' }, message: '강아지도 영웅이도 귀엽네', createdAt: new Date().toISOString() },
    { username: { nickname: 'happyday' }, message: '오늘도 행복한하루 ㅎㅎ', createdAt: new Date().toISOString() },
    { username: { nickname: '안녕하세요' }, message: '우리 아들같아서 예뻐요~', createdAt: new Date().toISOString() },
    { username: { nickname: '저녁노을' }, message: '오늘 점심은 뭔가요~?', createdAt: new Date().toISOString() },
    { username: { nickname: '마마파더' }, message: '얼굴보니 힘이나네요~!', createdAt: new Date().toISOString() },
  ]);

  const [totalCommentCount, setTotalCommentCount] = useState<number>(comments.length);
  const MAX_COMMENTS = 7;

  const handleAddComment = (): void => {
    if (newComment.trim() === '') return;
    const newObj: FeedComment = { username: { nickname }, message: newComment, createdAt: new Date().toISOString() };
    let updatedComments = [...comments, newObj];
    if (updatedComments.length > MAX_COMMENTS) {
      updatedComments = updatedComments.slice(updatedComments.length - MAX_COMMENTS);
    }
    setComments(updatedComments);
    setNewComment('');
    setTotalCommentCount((prev) => prev + 1);
  };

  const handleMypageClick = () => navigate('/trot/mypage');
  const preventClick = (): void => window.alert('준비 중인 기능입니다!');
  const AlarmClick = (): void => window.alert('알림 기능 준비 중입니다!');

  const membershipData: MembershipCard[] = [
    {
      id: 1,
      title: '영웅시대의 사랑을\n보여주세요!',
      desc: '댓글/응원메세지 이벤트\n참여하러 가기',
      img: membershipCardImg1,
      current: '1',
      total: '3',
    },
    {
      id: 2,
      title: '동원이는 무슨 옷\n입고 다닐까?',
      desc: '동원 스타일 PICK\n바로 보러가기',
      img: membershipCardImg2,
      current: '2',
      total: '3',
    },
    {
      id: 3,
      title: '정동원 팬미팅\n티켓 OPEN',
      desc: '7월 2일 18:00PM (KST)\n오직 쿠팡에서 예매 가능 ',
      img: membershipCardImg3,
      current: '3',
      total: '3',
    },
  ];

  const sliderSettings: Settings = {
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
    <div className="homeContainer trot">
      <div className="main-logo">
        <p className="img main"><img src={isDarkMode ? dark_logo : logo} alt="logo" /></p>
        <p className="img2 alarm trot-alarm" onClick={AlarmClick}><img src={isDarkMode ? dark_alarm : alarm} alt="alarm" /></p>
      </div>

      <div className="mypageSection Section trot" onClick={handleMypageClick}>
        <div className="left">
          <p>{nickname}님!<br /> 오늘도 우리 함께 <br /> 행복한 덕질해요! </p>
          <div className="artistButtons trotButtons">
            <button
              className='button2'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); preventClick(); }}
            >
              <img src={artist1} alt="artist1" />
            </button>
            <button
              className='button2'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); preventClick(); }}
            >
              <img src={artist3} alt="artist3" />
            </button>
            <button
              className='button2'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); preventClick(); }}
            >
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
          {[live02, live01, live03].map((img, i) => (
            <div key={i} className="liveImg" onClick={preventClick}>
              <img src={img} alt={`live${i}`} />
              <div className="liveTextBox">
                <p className="trot-artist">{i === 1 ? '정동원' : '임영웅'}</p>
                <p className="trot-title">트로트 라이브 방송</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TrotArtistSection
        profileImage={artist01}
        artistName="영웅"
        isVerified={true}
        verifiedIcon={check}
        postTime="07.01. 05:06"
        postText="간만에 시월이랑 힐링타임~"
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
        <p>{nickname}님을 위한 추천 컨텐츠</p>
        <div className="videoSwipe">
          {[thumb1, thumb2, thumb3].map((thumb, i) => (
            <div key={i} className="videoCard" onClick={preventClick}>
              <img src={thumb} alt={`video${i}`} />
              <img src={playIcon} alt="play" className="playIcon" />
              <p>트로트 무대 하이라이트</p>
            </div>
          ))}
        </div>
      </div>

      <TrotQuizSection handleQuizClick={preventClick} />

      <div className="voteSection">
        <div className="swipe vote">
          <div className="voteRow">
            <div className="voteCard" onClick={preventClick}>
              <p className="trot-vote-tit">투표 D-3</p>
              <img src={vote01} alt="vote01" />
              <div className="trot-voteText"><span>[798회] KBS 뮤직뱅크<br />K-Chart 1위 후보 투표</span></div>
            </div>
            <div className="voteCard" onClick={preventClick}>
              <p className="trot-vote-tit">투표 D-3</p>
              <img src={vote02} alt="vote02" />
              <div className="trot-voteText"><span>7월 첫째주<br />당신의 마음을 울린 아이돌은?</span></div>
            </div>
            <div className="voteCard" onClick={preventClick}>
              <p className="trot-vote-tit">투표 D-3</p>
              <img src={vote03} alt="vote03" />
              <div className="trot-voteText"><span>[600회] KBS 인기가요<br />K-Chart 1위 후보 투표</span></div>
            </div>
          </div>
          <div className="voteRow offset">
            <div className="voteCard" onClick={preventClick}>
              <p className="trot-vote-tit">투표 D-3</p>
              <img src={vote04} alt="vote04" />
              <div className="trot-voteText"><span>케이팝 코스프레 1위는?</span></div>
            </div>
            <div className="voteCard" onClick={preventClick}>
              <p className="trot-vote-tit">투표 D-3</p>
              <img src={vote05} alt="vote05" />
              <div className="trot-voteText"><span>[808회] KBS 인기가요<br />K-Chart 1위 후보 투표</span></div>
            </div>
            <div className="voteCard" onClick={preventClick}>
              <p className="trot-vote-tit">투표 D-3</p>
              <img src={vote06} alt="vote06" />
              <div className="trot-voteText"><span>감성 가득 셀카장인<br />여자 아이돌은?</span></div>
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
                  {item.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br /></React.Fragment>
                  ))}
                </h2>
                <p className="desc">
                  {item.desc.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br /></React.Fragment>
                  ))}
                </p>
                <div className="indicator">
                  <span className="current">{item.current}</span>
                  <span className="total"> | {item.total}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Home;
