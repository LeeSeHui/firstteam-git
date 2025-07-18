import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Backbutton.css'

const BackButton = ({ to, label = '뒤로가기' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to); // 명시된 경로로 이동
    } else {
      navigate(-1); // 아니면 뒤로가기
    }
  };

  return (
    <div>
      <div className='header'>
        <div className='ButtonContainer'>
          <button onClick={handleBack}>←</button>
          <span>{label}</span>
        </div>
      </div>
    </div>
    
    
  );
};


export default BackButton;
