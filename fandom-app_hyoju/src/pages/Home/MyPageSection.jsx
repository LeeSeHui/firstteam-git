import React from 'react';
import Section from '../../components/Section';
import ArtistSelectBox from './ArtistSelectBox';
import ArtistSectionBox from './ArtistSectionBox';
import './MyPageSection.css';

const MyPageSection = ({ selectedArtists }) => {
  return (
    <div className="mypage-section">
      <Section title="마이페이지" to="/mypage">
        <div style={{ display: 'flex', gap: '10px' }}>
          {selectedArtists.map((artist, idx) => (
            <ArtistSectionBox key={idx} artistName={artist} />
          ))}
          <ArtistSelectBox />
        </div>
      </Section>
    </div>
  );
};

export default MyPageSection;
