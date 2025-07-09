import React from 'react';
import ArtistSelectBox from './ArtistSelectBox';

const MyPageSection = ({ selectedArtists }) => {
  return (
    <div className='mypage-section'>
      <h2>마이페이지 섹션</h2>

      {/* ✅ 여기에 ArtistSelectBox 추가 */}
      <ArtistSelectBox />

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
