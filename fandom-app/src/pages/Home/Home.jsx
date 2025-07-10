import React from 'react'
import MyPageSection from './MyPageSection';
import LiveSection from './LiveSection';
import QuizSection from './QuizSection';
import AdSection from './AdSection';
import ArtistSection from './ArtistSection';
import VoteSection from './VoteSection';
import ChartSection from './ChartSection';
import YoutubeSection from './YoutubeSection';
import logo from '../../assets/logo.png'
import alarm from '../../assets/alarm.png'
import './Home.css';
import { useNavigate } from 'react-router-dom'


const Home = ({ selectedArtists }) => {
  const navigate = useNavigate(); 

  const handleAlarmClick = () => {
    navigate('/alart'); // ✅ 클릭 시 '/alarm' 페이지로 이동
  };
  return (
    <div className='home-page'>
      <div className="home-top">
        <p><img src={logo} alt="로고" /></p>
        <p onClick={handleAlarmClick} style={{ cursor: 'pointer' }}>
        <img src={alarm} alt="알림" />
        </p>
      </div>
      
      <MyPageSection selectedArtists={selectedArtists} />
      <LiveSection />
      <ArtistSection />
      <YoutubeSection/>
      <QuizSection />
      <VoteSection/>
      <ChartSection/>
      <AdSection/>
    </div>
  );
};

export default Home
