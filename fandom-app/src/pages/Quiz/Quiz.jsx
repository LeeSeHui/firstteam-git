import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz1 from '../../assets/Quiz/Quiz1.png';
import Quiz1Answer from '../../assets/Quiz/Quiz1_answer.png';
import Quiz2 from '../../assets/Quiz/Quiz2.png';
import Quiz3 from '../../assets/Quiz/Quiz3.png';
import Quiz3Answer from '../../assets/Quiz/Quiz3_answer.png';

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const images = [Quiz1, Quiz1Answer, Quiz2, Quiz3, Quiz3Answer];
  const alerts = {
    1: '정답입니다!',
    2: '오답입니다!',
    4: '정답입니다!',
  };

  const handleClick = () => {
    if (step >= images.length) return;

    if (alerts[step]) {
      alert(alerts[step]);
    }

    setStep((prev) => prev + 1);
  };

  // 🔒 뒤로가기 버튼 클릭 시 이벤트 버블링 막기!
  const handleBackClick = (e) => {
    e.stopPropagation(); // 상위 div의 onClick 막기
    navigate('/');
  };

  return (
    <div className="quiz-page" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2>퀴즈 페이지</h2>
      <button onClick={handleBackClick}>← 뒤로가기</button>
      {step < images.length ? (
        <img src={images[step]} alt={`퀴즈 ${step}`} />
      ) : (
        <p>🎉 퀴즈를 모두 완료했습니다!</p>
      )}
    </div>
  );
};

export default Quiz;
