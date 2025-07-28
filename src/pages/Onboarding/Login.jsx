import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/onboarding/char.png';
import mainLogo from '../../assets/onboarding/mainLogo.png'
import kakaoIcon from '../../assets/onboarding/kakaoLogo.png';
import googleIcon from '../../assets/onboarding/googleLogo.png';
import appleIcon from '../../assets/onboarding/appleLogo.png';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/manual');
  };

  return (
    <div className="login-container">
      <img src={loginImg} alt="Login" className="login-image" />
      <img src={mainLogo} alt="" />
      <div className="btn-wrap">
        <div className="simple-badge">
          <p>가장간편!</p>
        </div>
        <button className="login-btn kakao" onClick={handleStart}>
          <span className="img kakao"><img src={kakaoIcon} alt="kakao" className="btn-icon" /></span>
          카카오로 시작하기
        </button>
        <button className="login-btn google" onClick={handleStart}>
        <span className="img google"><img src={googleIcon} alt="google" className="btn-icon" /></span>
        구글로 시작하기
      </button>

      <button className="login-btn apple" onClick={handleStart}>
        <span className="img apple"><img src={appleIcon} alt="apple" className="btn-icon" /></span>
        애플로 시작하기
      </button>
      </div>

      
    </div>
  );
};

export default Login;
