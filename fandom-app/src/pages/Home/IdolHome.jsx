import React from 'react';
import MyPageSection from './MyPageSection';
import LiveSection from './LiveSection';
import QuizSection from './QuizSection';
import AdSection from './AdSection';
import ArtistSection from './ArtistSection';
import VoteSection from './VoteSection';
import ChartSection from './ChartSection';
import YoutubeSection from './YoutubeSection';
import logo from '../../assets/logo.png';
import alarm from '../../assets/alarm.png';
import mainidol from '../../assets/main-idol-final.png';
import './HomeLayout.css';
import { useNavigate } from 'react-router-dom';

const IdolHome = ({ selectedArtists }) => {
  const navigate = useNavigate();

  const handleAlarmClick = () => {
    navigate('/alart');
  };

  return (
    <div className="home-page">
      <img src={mainidol} alt="main_idol" className="main-idol-final" />
      <div className="home-top">
        <p><img src={logo} alt="로고" /></p>
        <p onClick={handleAlarmClick} style={{ cursor: 'pointer' }}>
          <img src={alarm} alt="알림" />
        </p>
      </div>
      <h2>메인 아이돌 페이지</h2>

      <MyPageSection selectedArtists={selectedArtists} />
      <LiveSection />
      <ArtistSection />
      <YoutubeSection />
      <QuizSection />
      <VoteSection />
      {/* <ChartSection /> */}
      <AdSection />
    </div>
  );
};

export default IdolHome;
