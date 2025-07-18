import React from 'react';
import daniel from '../../assets/artist-select/daniel.png';
import haein from '../../assets/artist-select/haein.png';
import hani from '../../assets/artist-select/hani.png';
import herin from '../../assets/artist-select/herin.png';
import minji from '../../assets/artist-select/minji.png';

const artists = [
  { name: 'daniel', img: daniel },
  { name: 'haein', img: haein },
  { name: 'hani', img: hani },
  { name: 'herin', img: herin },
  { name: 'minji', img: minji },
];

const ArtistSelect = () => {
  return (
    <div className="artist-select-wrapper">
      {artists.map((artist, idx) => (
        <img
          key={idx}
          src={artist.img}
          alt={artist.name}
          className="artist-img"
        />
      ))}
    </div>
  );
};

export default ArtistSelect;