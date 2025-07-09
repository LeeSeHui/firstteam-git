import React from 'react';
import BackButton from '../../components/Backbutton';

const ArtistSelectBox = ({ onClick }) => {
  return (
    <>
    <button
      style={{ width: 50, height: 50, borderRadius: '50%', fontSize: '24px' }}
      onClick={onClick}
    >
      +
    </button></>
    
  );
};

export default ArtistSelectBox;
