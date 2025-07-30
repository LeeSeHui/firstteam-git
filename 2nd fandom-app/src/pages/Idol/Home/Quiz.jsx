import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import quiz1 from '../../../assets/Quiz/Quiz1.png';
import quiz2 from '../../../assets/Quiz/quiz2-1.png';
import quiz3 from '../../../assets/Quiz/quiz2-2.png';
import quiz4 from '../../../assets/Quiz/quiz2-3.png';
import quiz5 from '../../../assets/Quiz/quiz2-4.png';
import correctImg from '../../../assets/mypage/payment/popup.png';
import wrongImg from '../../../assets/Quiz/wrong.png';
import Popup from '../../../components/Popup';
import YellowButton from '../../../components/YellowButton';
import BackButton from '../../../components/BackButton';
import confetti from 'canvas-confetti'; // ✅ 추가

const quizData = [
  {
    id: 1,
    question: "이 무대 기억나?",
    img: quiz1,
    type: "text",
    options: [
      { text: "인기가요 2025.05.27", isCorrect: false },
      { text: "뮤직뱅크 2024.08.26", isCorrect: false },
      { text: "MAMA 2024.11.23", isCorrect: true }
    ],
  },
  {
    id: 2,
    question: "이 유행어의 주인공은?",
    subtitle: "“ 뜬겁새로! 준비 갈 완료~💃 ”",
    type: "image",
    options: [
      { img: quiz2, isCorrect: false },
      { img: quiz3, isCorrect: true },
      { img: quiz4, isCorrect: false },
      { img: quiz5, isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const quiz = quizData[currentQuiz];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const correct = quiz.options[selectedOption].isCorrect;
    setIsCorrect(correct);

    if (correct) {
      // ✅ 정답일 때만 컨페티 팡!
      confetti({
        particleCount: 200,
        spread: 160,
        startVelocity: 45,
        gravity: 0.8,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#FFD700', '#FF69B4', '#00e5ff'],
      });
    }

    setShowModal(true);
  };

  const handleNextQuiz = () => {
    setShowModal(false);
    setSelectedOption(null);
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      navigate('/idol/home');
    }
  };

  return (
    <div className="quizContainer">
      <BackButton label="퀴즈" />
      <h2>{quiz.question}</h2>
      {quiz.subtitle && <p className="quizSubtitle">{quiz.subtitle}</p>}
      <p className="quizExplain">퀴즈의 정답을 맞히시면 특별한 선물이 지급됩니다!</p>

      {quiz.img && quiz.type === "text" && (
        <img src={quiz.img} alt="quiz" className="quizMainImage" />
      )}

      {quiz.type === "text" && (
        <div className="options">
          {quiz.options.map((option, idx) => (
            <button
              key={idx}
              className={`optionButton has-dot ${selectedOption === idx ? 'selected' : ''}`}
              onClick={() => handleOptionClick(idx)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {quiz.type === "image" && (
        <div className="quizImageGrid">
          {quiz.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isDimmed = selectedOption !== null && selectedOption !== idx;
            return (
              <button
                key={idx}
                className={`imageOption ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}`}
                onClick={() => handleOptionClick(idx)}
              >
                <span className="dot" />
                <img src={option.img} alt={`option ${idx + 1}`} />
              </button>
            );
          })}
        </div>
      )}

      <YellowButton
        label="제출"
        onClick={handleSubmit}
        className="quiz-full-width"
      />

      {showModal && (
        <Popup
          type="quiz"
          isCorrect={isCorrect}
          onConfirm={handleNextQuiz}
          correctImg={correctImg}
          wrongImg={wrongImg}
        />
      )}
    </div>
  );
};

export default Quiz;
