import React from 'react';
import './Popup.css'

const Popup = ({ isCorrect, onConfirm, correctImg, wrongImg }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <img
          src={isCorrect ? correctImg : wrongImg}
          alt="result"
          className="modalImage"
        />
        <h3>{isCorrect ? "정답입니다!" : "오답입니다!"}</h3>
        <p>{isCorrect ? "마이페이지에서 포인트를 확인할 수 있습니다." : "다음 번 퀴즈에 다시 도전해보세요."}</p>
        <button onClick={onConfirm}>확인</button>
      </div>
    </div>
  );
};

export default Popup;
