import React from 'react';
import './Gallery.css';

// 이미지 import
import gallery1 from '../../../../assets/artist/gallery1.png';
import gallery2 from '../../../../assets/artist/gallery2.png';
import gallery3 from '../../../../assets/artist/gallery3.png';
import gallery4 from '../../../../assets/artist/gallery4.png';
import gallery5 from '../../../../assets/artist/gallery5.png';
import gallery6 from '../../../../assets/artist/gallery6.png';
import gallery7 from '../../../../assets/artist/gallery7.png';
import gallery8 from '../../../../assets/artist/gallery8.png';

// 프로필 import
import geust1 from '../../../../assets/artist/hanihani.png';
import geust2 from '../../../../assets/artist/jeans.png';
import geust3 from '../../../../assets/artist/twin21.png';


const galleryData = [
  { id: 1, name: '하니', date: '2023.07.01', profile: geust1, img: gallery1 },
  { id: 2, name: '해인', date: '2023.07.01', profile: geust1, img: gallery2 },
  { id: 3, name: '다니엘', date: '2023.07.01', profile: geust1, img: gallery3 },
  { id: 4, name: '해린', date: '2023.07.01', profile: geust2, img: gallery4 },
  { id: 5, name: '민지', date: '2023.07.01', profile: geust2, img: gallery5 },
  { id: 6, name: '하니', date: '2023.07.01', profile: geust2, img: gallery6 },
  { id: 7, name: '해린', date: '2023.07.01', profile: geust3, img: gallery7 },
  { id: 8, name: '해인', date: '2023.07.01', profile: geust3, img: gallery8 },
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      {galleryData.map((item) => (
        <div className="gallery-card" key={item.id}>
          <img src={item.img} alt="갤러리 이미지" className="gallery-img" />
          <div className="gallery-info">
            <img src={item.profile} alt="프로필" className="gallery-profile" />
            <div className="gallery-text">
              <p className="gallery-name">{item.name}</p>
              <p className="gallery-date">{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
