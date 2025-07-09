import React from 'react'
import MyPageSection from './MyPageSection';
import LiveSection from './LiveSection';
import QuizSection from './QuizSection';
import AdSection from './AdSection';
import ArtistSection from './ArtistSection';
import VoteSection from './VoteSection';
import ChartSection from './ChartSection';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'


const Home = ({ selectedArtists }) => {
  const navigate = useNavigate(); 

  const handleAlarmClick = () => {
    navigate('/alarm'); // ✅ 클릭 시 '/alarm' 페이지로 이동
  };
  return (
    <div>
      <div className="home-top">
        <p><img src={logo} alt="로고" /></p>
        <p onClick={handleAlarmClick} style={{ cursor: 'pointer' }}>
        <img src={alarm} alt="알람" />
        </p>
      </div>
      <MyPageSection selectedArtists={selectedArtists} />
      <LiveSection />
      <ArtistSection />
      <QuizSection />
      <VoteSection/>
      <ChartSection/>
      <AdSection/>
    </div>
  );
};

export default Home
