import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistSelectBox = () => {
  const navigate = useNavigate();
  return (
    <button
      style={{ width: 50, height: 50, borderRadius: '50%', fontSize: '24px' }}
      onClick={() => navigate('/select-artist')}
    >
      +
    </button>
  );
};

export default ArtistSelectBox;
