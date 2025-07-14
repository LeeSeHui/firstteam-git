import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/onboarding/char.png';
import kakaoIcon from '../../assets/onboarding/kakaoLogo.png';
import googleIcon from '../../assets/onboarding/googleLogo.png';
import appleIcon from '../../assets/onboarding/appleLogo.png';
import badgeImg from '../../assets/onboarding/badge.png'; // "가장 간편!" 뱃지 이미지

import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/manual');
  };

  return (
    <div className="login-container">
      <img src={loginImg} alt="Login" className="login-image" />

      <h2 className="login-title">뉴비와 함께<br />행복한 덕질해요!</h2>
      <p className="login-subtitle">지금 바로 최애와 함께하세요!</p>

      <div className="btn-wrap">
        <div className="badge">
          <img src={badgeImg} alt="badge" />
        </div>
        <button className="login-btn kakao" onClick={handleStart}>
          <span className="img kakao"><img src={kakaoIcon} alt="kakao" className="btn-icon" /></span>
          카카오로 시작하기
        </button>
      </div>

      <button className="login-btn google">
        <span className="img google"><img src={googleIcon} alt="google" className="btn-icon" /></span>
        구글로 시작하기
      </button>

      <button className="login-btn apple">
        <span className="img apple"><img src={appleIcon} alt="apple" className="btn-icon" /></span>
        애플로 시작하기
      </button>
    </div>
  );
};

export default Login;
