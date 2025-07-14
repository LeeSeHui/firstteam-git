// components/BackButton.jsx
import { useNavigate } from 'react-router-dom';
import React from 'react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        margin: '20px',
        padding: '10px 15px',
        backgroundColor: '#eee',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      ← 뒤로가기
    </button>
  );
};

export default BackButton;
