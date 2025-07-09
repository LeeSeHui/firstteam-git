import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splashImg from '../../assets/splash.png';  // splash 이미지 import
import loginImg from '../../assets/login.png';

const Login = () => {
  const [loginType, setLoginType] = useState(null);
  const [showSplash, setShowSplash] = useState(true);  // 스플래시 상태
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);  // 3초 뒤 스플래시 숨김
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  const handleBack = () => {
    if (loginType) {
      setLoginType(null);
    } else {
      navigate('/home');
    }
  };

  // 스플래시 보여주는 UI
  if (showSplash) {
    return (
        <img src={splashImg} alt="Splash" />
    );
  }

  // 스플래시 후 로그인 화면 UI
  return (
    <>
      <button onClick={handleBack}>뒤로가기</button>
      {!loginType ? (
        <>
          <img src={loginImg} alt="login" />
          <div className="login-container">
            <h2 className="login-title">로그인페이지</h2>
            <button className="login-button" onClick={() => navigate('/manual')} >
              카카오로 시작하기
            </button>
            <button className="login-button" onClick={() => navigate('/manual')} >
              구글로 시작하기
            </button>
            <button className="login-button" onClick={() => navigate('/manual')} >
              애플로 시작하기
            </button>
          </div>
        </>
      ) : (
        <div className="login-container">
          <h2 className="login-title">{loginType}로 시작하기</h2>
        </div>
      )}
    </>
  );
};

export default Login;

