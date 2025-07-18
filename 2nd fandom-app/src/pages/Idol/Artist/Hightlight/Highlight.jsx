import React from 'react';
import { useNavigate } from 'react-router-dom';

const Highlight = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Highlight Page</h2>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/idol/artist/artist-notice')}>공지</button>
        <button onClick={() => navigate('/idol/home/vote')}>투표</button>
        <button onClick={() => navigate('/idol/artist/artist-board')}>아티스트 보드</button>
      </div>
      <p>여기에 Highlight 페이지 콘텐츠...</p>
    </div>
  );
};

export default Highlight;
