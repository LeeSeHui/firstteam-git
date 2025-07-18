import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  useNickname  from '../../contexts/useNickname';

import BackButton from '../../components/BackButton';
import './Nickname.css';
import manual4 from '../../assets/Manual/idol-mypage-char.png';

const NicknamePage = () => {
  const [input, setInput] = useState('');
  const { updateNickname  } = useNickname();
  const navigate = useNavigate();

  const handleComplete = () => {
    if (input.trim() === '') return;
    updateNickname (input); // 전역 닉네임 저장
    navigate('/welcome'); // 홈으로 이동
  };

  return (
    <div className="nickname-container">
      <BackButton />

      <img src={manual4} alt="welcome character" className="welcome-img" />

      <h2>NUVIE에 온걸 환영해요</h2>
      <p className="sub">닉네임을 만들어 주세요!!</p>

      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="닉네임 입력"
          maxLength={10}
        />
        {input && (
          <button
            className="clear-btn"
            onClick={() => setInput('')} // ✅ input 초기화
            type="button"
          >
            X
          </button>
        )}
      </div>

      <p className="notice">※ 추후 수정이 가능합니다.</p>
      <p className="count">{input.length}/10</p> {/* ✅ 글자 수는 input 기준 */}

      <button onClick={handleComplete} className="complete-btn">
        완료
      </button>
    </div>
  );
};

export default NicknamePage;
