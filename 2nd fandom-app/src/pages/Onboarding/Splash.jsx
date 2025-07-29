import React, { useEffect } from 'react';
import './Splash.css';
import { useNavigate } from 'react-router-dom';
import splashImg from '../../assets/splash.png';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={splashImg} alt="Splash" className="splash-img" />
      <div className="splash-text">팬덤을 보는 새로운 방법</div>
    </div>
  );
};

export default Splash;
