import React from 'react';
import HomeLayout from './HomeLayout';
import TrotSection from './TrotSection';
import logo from '../../assets/logo.png';
import alarm from '../../assets/alarm.png';
import maintrot from '../../assets/main-trot-final.png';
import { useNavigate } from 'react-router-dom';
import './HomeLayout.css';

const TrotHome = ({ selectedArtists }) => {
  const navigate = useNavigate();

  const handleAlarmClick = () => {
    navigate('/alart');
  };

  return (
    <>
      <div className="home-top">
        <img src={maintrot} alt="main_trot" className="main-trot-final" />
        <p><img src={logo} alt="로고" /></p>
        <p onClick={handleAlarmClick} style={{ cursor: 'pointer' }}>
          <img src={alarm} alt="알림" />
        </p>
      </div>
      <h2>트로트 페이지</h2>

      <HomeLayout artistSection={<TrotSection />} selectedArtists={selectedArtists} />
    </>
  );
};

export default TrotHome;
