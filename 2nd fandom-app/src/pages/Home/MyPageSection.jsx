import React from 'react';
import ArtistSelectBox from './ArtistSelectBox';
import { useNavigate } from 'react-router-dom';
import './MypageSection.css';

const MyPageSection = ({ selectedArtists = [] }) => {
  const navigate = useNavigate();

  const handleSectionClick = () => {
    navigate('/mypage');
  };

  // ArtistSelectBox 클릭 시 따로 처리
  const handleArtistSelectClick = (e) => {
    e.stopPropagation(); // 부모 div로 이벤트 버블링 막기
    navigate('/select-artist');
  };

  return (
    <div className='mypage-section' onClick={handleSectionClick}>
      <h2>마이페이지 섹션</h2>

      {/* ✅ 여기에 ArtistSelectBox 추가 */}
      <ArtistSelectBox onClick={handleArtistSelectClick} />

      {/* 선택된 아티스트 표시 */}
      <div>
        {selectedArtists.length > 0 ? (
          selectedArtists.map((artist, index) => (
            <p key={index}>{artist}</p>
          ))
        ) : (
          <p>선택된 아티스트가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MyPageSection;
