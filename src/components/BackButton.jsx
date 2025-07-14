import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 브라우저 히스토리에서 한 단계 뒤로
  };

  return (
    <button onClick={handleBack} style={{
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      background: '#ddd',
      cursor: 'pointer'
    }}>
      ← 뒤로가기
    </button>
  );
};

export default BackButton;
