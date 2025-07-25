import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  useNickname  from '../../contexts/useNickname';

import BackButton from '../../components/BackButton';
import YellowButton from '../../components/YellowButton';
import './Nickname.css';
import nickname_img from '../../assets/onboarding/nickname_img.png';
import X_button from '../../assets/onboarding/X_button.png'

const NicknamePage = () => {
  const [input, setInput] = useState('');
  const { updateNickname  } = useNickname();
  const navigate = useNavigate();

  const handleComplete = () => {
    try {
      updateNickname(input);
      navigate('/welcome');
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <header>
      <BackButton />
      </header>
      <div className="nickname-container">
        <h2><span>NUVIE</span>에 온걸 환영해요</h2>
      <p className="sub2">닉네임을 만들어 주세요!</p>
      <img src={nickname_img} alt="welcome character" className="nickname-img" />

      

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
            onClick={() => setInput('')}
            type="button"
          >
            <img src={X_button} alt="" />
          </button>
        )}
      </div>

      {/* ✅ 아래 info 묶어서 한 줄 정렬 */}
      <div className="input-info">
        <p className="notice">※ 추후 수정이 가능합니다.</p>
        <p className="nickname-count">{input.length}/10</p>
      </div>


      <YellowButton label={'확인'} onClick={handleComplete}/>
    </div>
    </div>
    
  );
};

export default NicknamePage;
