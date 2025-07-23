import React from 'react';
import './Popup.css';

const Popup = ({
  type, // 'quiz', 'vote', 'unsubscribe', 'attendance'
  isCorrect,
  correctImg,
  wrongImg,
  voteImg,
  unsubscribeImg,
  attendanceImg,
  onConfirm,
}) => {
  return (
    <div className="modalOverlay">
      <div className="popUp">
        {/* 이미지 영역 */}
        {type === 'quiz' && (
          <img
            src={isCorrect ? correctImg : wrongImg}
            alt="quiz-result"
            className="modalImage"
          />
        )}
        {type === 'vote' && (
          <img
            src={voteImg}
            alt="vote-result"
            className="modalImage"
          />
        )}
        {type === 'unsubscribe' && (
          <img
            src={unsubscribeImg}
            alt="unsubscribe-result"
            className="modalImage"
          />
        )}
        {type === 'attendance' && (
          <img
            src={attendanceImg}
            alt="attendance-result"
            className="modalImage"
          />
        )}

        {/* 텍스트 영역 */}
        <div className="modalTextWrap">
          {type === 'quiz' && (
            <>
              <h3>{isCorrect ? '정답입니다!' : '오답입니다!'}</h3>
              <p>
                {isCorrect
                  ? '마이페이지에서 포인트를 확인할 수 있습니다.'
                  : '다음 번 퀴즈에 다시 도전해보세요.'}
              </p>
            </>
          )}

          {type === 'vote' && (
            <>
              <h3><span style={{ color: '#FFC800' }}>투표 완료!</span></h3>
              <p className="sub-color">마이페이지에서 포인트를 확인할 수 있습니다.</p>
            </>
          )}

          {type === 'unsubscribe' && (
            <>
              <h3><span style={{ color: '#FFC800' }}>해지되었습니다.</span></h3>
              <p>언제든지 다시 가입할 수 있어요!</p>
            </>
          )}

          {type === 'attendance' && (
            <>
              <h3><span style={{ color: '#FFC800' }}>출석 완료!</span></h3>
              <p className="sub-color">마이페이지에서 포인트 확인 가능합니다.</p>
            </>
          )}

          {/* 공통 버튼 */}
          <button onClick={onConfirm}>
            {type === 'vote' ? '포인트 받기' : '확인'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
