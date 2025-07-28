import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splashImg from '../../assets/splash.png';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 뒤 로그인 페이지로 자동 이동
    const timer = setTimeout(() => {
      navigate('/onboarding/login');
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클린업
  }, [navigate]);

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={splashImg} alt="Splash" />
    </div>
  );
};

export default Splash;
