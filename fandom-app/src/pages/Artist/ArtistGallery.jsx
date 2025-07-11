import React from 'react';
import './ArtistGallery.css';
import haniGallery from '../../assets/artist_gallery_hani.png';

const galleryImages = [
  { id: 1, src: haniGallery, alt: 'Hanni Gallery' },
  { id: 2, src: haniGallery, alt: 'Hanni Gallery' },
  { id: 3, src: haniGallery, alt: 'Hanni Gallery' },
  { id: 4, src: haniGallery, alt: 'Hanni Gallery' },
  { id: 5, src: haniGallery, alt: 'Hanni Gallery' },
  { id: 6, src: haniGallery, alt: 'Hanni Gallery' },

];

const ArtistGallery = () => {
  return (
    <div className="artist-gallery">
      <ul>
        {galleryImages.map((img) => (
          <li key={img.id}>
            <img src={img.src} alt={img.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistGallery;