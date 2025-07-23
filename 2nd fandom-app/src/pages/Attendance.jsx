import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Attendance.css';
import Popup from '../components/Popup';

import day0 from '../assets/mypage/attendance/0day.png';
import day1 from '../assets/mypage/attendance/1day.png';
import completeImg from '../assets/mypage/payment/popup.png';

const Attendance = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    setIsChecked(true);
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);
  };

  const handleConfirm = () => {
    setShowPopup(false);
    navigate('/idol/home');
  };

  return (
    <div className="attendance-wrapper">
      <div className="container">
        <div className="attendance-header">
          <div className="text-area">
            <p className="main-text">
              <strong style={{ color: '#FF7A00' }}>매일 출석하면<br />3일차에 2배 받아요</strong>
              <span className="sub-text sub-color">뉴비랑 놀고 포인트 받아가세요!</span>
            </p>
          </div>
        </div>

        <div className="character-area">
          <img
            className="attendance-stamp"
            src={isChecked ? day1 : day0}
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
