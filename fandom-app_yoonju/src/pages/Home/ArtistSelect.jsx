import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistSelect = ({ setSelectedArtists, selectedArtists }) => {
  const navigate = useNavigate();
  const artistList = ['AKMU', 'BTS', 'NCT', 'IVE'];

  const handleSelect = (artist) => {
    setSelectedArtists([...selectedArtists, artist]);
    navigate('/');
  };

  return (
    <div>
      <h2>아티스트 선택</h2>
      {artistList.map((artist) => (
        <button
          key={artist}
          onClick={() => handleSelect(artist)}
          style={{ display: 'block', margin: '10px' }}
        >
          {artist}
        </button>
      ))}
    </div>
  );
};

export default ArtistSelect;
