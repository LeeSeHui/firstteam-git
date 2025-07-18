import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SelectArtist.css';

// components
import BackButton from '../../components/BackButton';

import artist1 from '../../assets/artist-select/제니.png';
import artist2 from '../../assets/artist-select/artist2.png';
import artist3 from '../../assets/artist-select/artist3.png';
import artist4 from '../../assets/artist-select/artist4.png';
import artist5 from '../../assets/artist-select/artist5.png';
import artist6 from '../../assets/artist-select/artist6.png';
import artist7 from '../../assets/artist-select/artist7.png';
import artist8 from '../../assets/artist-select/artist3.png';
import artist9 from '../../assets/artist-select/artist3.png';
import artist10 from '../../assets/artist-select/artist3.png';
import artist11 from '../../assets/artist-select/artist3.png';
import artist12 from '../../assets/artist-select/artist3.png';
import artist13 from '../../assets/artist-select/artist3.png';
import artist14 from '../../assets/artist-select/artist3.png';
import artist15 from '../../assets/artist-select/artist3.png';

// 필요한 이미지 추가

const artistData = [
  { id: 1, img: artist1, name: "JENNIE" },
  { id: 2, img: artist2, name: "NewJeans" },
  { id: 3, img: artist3, name: "G-dragon" },
  { id: 4, img: artist4, name: "BTS" },
  { id: 5, img: artist5, name: "LE SSERAFIM" },
  { id: 6, img: artist6, name: "IU" },
  { id: 7, img: artist7, name: "IVE" },
  { id: 8, img: artist8, name: "SEVENTEEN" },
  { id: 9, img: artist9, name: "Stray Kids" },
  { id: 10, img: artist10, name: "BLACKPINK" },
  { id: 11, img: artist11, name: "NCT" },
  { id: 12, img: artist12, name: "TXT" },
  { id: 13, img: artist13, name: "EXO" },
  { id: 14, img: artist14, name: "SHINee" },
  { id: 15, img: artist15, name: "SHINee" }
  // ... 더 추가
];

const SelectArtist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("selectedArtists");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  const handleBack = () => navigate(-1);

  const handleNext = () => {
    localStorage.setItem("selectedArtists", JSON.stringify(selected));
    if (location.state?.fromHome) {
      navigate('/idol/home');
    } else {
      navigate('/nickname');
    }
  };

  // 3줄로 데이터 나누기
  const row1 = artistData.filter((_, idx) => idx % 3 === 0);
  const row2 = artistData.filter((_, idx) => idx % 3 === 1);
  const row3 = artistData.filter((_, idx) => idx % 3 === 2);

  return (
    <div className="artist-select-container">
      <BackButton onClick={handleBack} />
      <h2>당신의 아티스트를<br />선택해 주세요</h2>
      <p>복수 선택 가능해요</p>
      <input type="text" placeholder="원하는 아티스트를 검색해보세요." />

      <div className="scroll-wrapper">
        <div className="artist-row">{row1.map((artist) => (
          <div key={artist.id} className={`artist-card ${selected.includes(artist.id) ? 'selected' : ''}`} onClick={() => toggleSelect(artist.id)}>
            <img src={artist.img} alt={artist.name} className="artist-img" />
            {selected.includes(artist.id) && (
              <div className="overlay">
                <p className="artist-name">{artist.name}</p>
                <span className="check">✔</span>
              </div>
            )}
          </div>
        ))}</div>

        <div className="artist-row middle-row">{row2.map((artist) => (
          <div key={artist.id} className={`artist-card ${selected.includes(artist.id) ? 'selected' : ''}`} onClick={() => toggleSelect(artist.id)}>
            <img src={artist.img} alt={artist.name} className="artist-img" />
            {selected.includes(artist.id) && (
              <div className="overlay">
                <p className="artist-name">{artist.name}</p>
                <span className="check">✔</span>
              </div>
            )}
          </div>
        ))}</div>

        <div className="artist-row">{row3.map((artist) => (
          <div key={artist.id} className={`artist-card ${selected.includes(artist.id) ? 'selected' : ''}`} onClick={() => toggleSelect(artist.id)}>
            <img src={artist.img} alt={artist.name} className="artist-img" />
            {selected.includes(artist.id) && (
              <div className="overlay">
                <p className="artist-name">{artist.name}</p>
                <span className="check">✔</span>
              </div>
            )}
          </div>
        ))}</div>
      </div>

      <button className="done-btn" onClick={handleNext}>다음</button>
    </div>
  );
};

export default SelectArtist;
