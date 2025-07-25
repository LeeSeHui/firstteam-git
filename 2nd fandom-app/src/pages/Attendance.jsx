import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Attendance.css';
import Popup from '../components/Popup';

import day0 from '../assets/mypage/attendance/0day.png';
import day1 from '../assets/mypage/attendance/1day.png';
import day0Dark from '../assets/dark/0day_dark.png';
import day1Dark from '../assets/dark/1day_dark.png';
import completeImg from '../assets/mypage/payment/popup.png';
import starCharacter from '../assets/mypage/attendance/star-character.png'; // 캐릭터 이미지 경로 추가
import BackButton from '../components/BackButton';

const Attendance = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const handleCheck = () => {
    setIsChecked(true);
    setTimeout(() => {
      setShowPopup(true);
    }, 1000);
  };

  const handleConfirm = () => {
    setShowPopup(false);
    navigate('/idol/home');
  };

  return (
    <div className="attendance-wrapper">
      <div className="container">
        <BackButton/>
        <div className="attendance-header">
          <div className="text-image-wrap">
            <div className="text-area">
              <h2>
                매일 출석하면<br />
                3일차에 <span>2배</span> 받아요
              </h2>
              <span className="sub-text">뉴비랑 놀고 포인트 받아가세요!</span>
            </div>
            <img src={starCharacter} alt="캐릭터" className="attendance-character" />
          </div>
        </div>

        <div className="character-area">
         <img
    className="attendance-stamp"
    src={
      isDarkMode
        ? isChecked
          ? day1Dark
          : day0Dark
        : isChecked
          ? day1
          : day0
    }
    alt="출석 이미지"
  />
        </div>

        <button
          className="attendance-btn"
          onClick={handleCheck}
          disabled={isChecked}
        >
          {isChecked ? '출석완료' : '출석하기'}
        </button>
      </div>

      {showPopup && (
        <Popup
          type="attendance"
          attendanceImg={completeImg}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Attendance;
