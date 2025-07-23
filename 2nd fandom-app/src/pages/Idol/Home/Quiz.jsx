import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import quiz1 from '../../../assets/quiz/quiz1.png';
import quiz2 from '../../../assets/quiz/quiz2-1.png';
import quiz3 from '../../../assets/quiz/quiz2-2.png';
import quiz4 from '../../../assets/quiz/quiz2-3.png';
import quiz5 from '../../../assets/quiz/quiz2-4.png';
import correctImg from '../../../assets/quiz/correct.png';
import wrongImg from '../../../assets/quiz/wrong.png';
import Popup from '../../../components/Popup';
import YellowButton from '../../../components/YellowButton';
import BackButton from '../../../components/BackButton';

const quizData = [
  {
    id: 1,
    question: "이 무대 기억나?",
    img: quiz1,
    type: "text", // ✅ 퀴즈 1은 텍스트 옵션
    options: [
      { text: "인기가요 2025.05.27", isCorrect: false },
      { text: "뮤직뱅크 2024.08.26", isCorrect: false },
      { text: "MAMA 2024.11.23", isCorrect: true }
    ],
  },
  {
    id: 2,
    question: "이 유행어의 주인공은?",
    subtitle: "“ 뜬겁새로! 준비 갈 완료~ ”",
    type: "image", // ✅ 퀴즈 2는 이미지 옵션
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
    setShowModal(true);
  };

  const handleNextQuiz = () => {
    setShowModal(false);
    setSelectedOption(null);
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      navigate('/idol/home'); // ✅ 마지막 문제 후 이동
    }
  };

  return (
    <div className="quizContainer">
      <BackButton label='퀴즈'/>
      <div className="quizBadge">마감 D-3</div>
      <h2>{quiz.question}</h2>
      {quiz.subtitle && <p className="quizSubtitle">{quiz.subtitle}</p>}
      {quiz.img && quiz.type === "text" && <img src={quiz.img} alt="quiz" className="quizMainImage" />}

      {quiz.type === "text" && (
        <div className="options">
          {quiz.options.map((option, idx) => (
            <button
              key={idx}
              className={`optionButton ${selectedOption === idx ? 'selected' : ''}`}
              onClick={() => handleOptionClick(idx)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {quiz.type === "image" && (
        <div className="quizImageGrid">
          {quiz.options.map((option, idx) => (
            <button
              key={idx}
              className={`imageOption ${selectedOption === idx ? 'selected' : ''}`}
              onClick={() => handleOptionClick(idx)}
            >
              <img src={option.img} alt={`option ${idx + 1}`} />
            </button>
          ))}
        </div>
      )}

      <YellowButton label='제출' onClick={handleSubmit}/>

      {showModal && (
        <Popup
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
