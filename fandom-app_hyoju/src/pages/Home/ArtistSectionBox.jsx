import React from 'react';

const ArtistSectionBox = ({ artistName }) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: '#ddd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        textAlign: 'center',
      }}
    >
      {artistName}
    </div>
  );
};

export default ArtistSectionBox;
