import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Vote.css'; // 필요 시 스타일 유지

const VoteSection = () => {
  const navigate = useNavigate();

  return (
    <div className="vote-section" style={{ background: '#ccc', padding: '40px', marginBottom: '20px' }}>
      <h2 style={{ cursor: 'pointer' }} onClick={() => navigate('/vote')}>
        투표 페이지
      </h2>
    </div>
  );
};

export default VoteSection;
