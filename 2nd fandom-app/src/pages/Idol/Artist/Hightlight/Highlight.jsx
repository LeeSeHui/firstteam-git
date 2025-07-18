import React from 'react';
import { useNavigate } from 'react-router-dom';

import minji from '../../../../assets/artist-select/minji.png';
import haein from '../../../../assets/artist-select/haein.png';
import hani from '../../../../assets/artist-select/hani.png';
import daniel from '../../../../assets/artist-select/daniel.png';
import herin from '../../../../assets/artist-select/herin.png';

import card from '../../../../assets/artist-select/cardsend.png'; // 배경 이미지 (단체샷)
import letter from '../../../../assets/artist-select/heartletter.png'; // 하트 편지

import './Highlight.css';

const Highlight = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '0 16px' }}>
      {/* 아티스트 이미지 가로 정렬 */}
      <div className="artist-row">
        <img src={minji} alt="minji" />
        <img src={haein} alt="haein" />
        <img src={hani} alt="hani" />
        <img src={daniel} alt="daniel" />
        <img src={herin} alt="herin" />
      </div>

      {/* 축하 카드 전송 섹션 */}
      <div className="card-section">
        <img src={card} alt="NewJeans Group" className="card-bg" />
        <img src={letter} alt="Heart Letter" className="heart-letter" />
        <button
          className="send-btn"
          onClick={() => alert('축하 카드가 전송되었습니다!')}
        >
          축하 카드 전송
        </button>
      </div>

      {/* 기존 버튼 */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/idol/artist/artist-notice')}>공지</button>
        <button onClick={() => navigate('/idol/home/vote')}>투표</button>
        <button onClick={() => navigate('/idol/artist/artist-board')}>아티스트 보드</button>
      </div>
    </div>
  );
};

export default Highlight;