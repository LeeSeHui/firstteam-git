import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.png';

const Login = () => {
  const [loginType, setLoginType] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    if (loginType) {
      // 로그인 방식 화면 → 로그인 메인으로
      setLoginType(null);
    } else {
      // 로그인 메인 → 홈으로
      navigate('/home');
    }
  };

  return (
    <>
      <button onClick={handleBack}>뒤로가기</button>

      {!loginType ? (
        <>
          <img src={loginImg} alt="login" />
          <div className="login-container">
            <h2 className="login-title">로그인페이지</h2>
            <button className="login-button" onClick={() => setLoginType('카카오')}>
              카카오로 시작하기
            </button>
            <button className="login-button" onClick={() => setLoginType('구글')}>
              구글로 시작하기
            </button>
            <button className="login-button" onClick={() => setLoginType('애플')}>
              애플로 시작하기
            </button>
          </div>
        </>
      ) : (
        <div className="login-container">
          <h2 className="login-title">{loginType}로 시작하기git</h2>
        </div>
      )}
    </>
  );
};

export default Login;
