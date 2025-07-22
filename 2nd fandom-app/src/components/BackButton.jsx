import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Backbutton.css';
import backbutton from '../assets/BackButton.png'


const BackButton = ({ to, label = '뒤로가기', onPlusClick, editText, onEditClick }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="ButtonContainer">
      <button className="back-arrow" onClick={handleBack}><img src={backbutton} alt="" /></button>

      {/* 마이페이지- 컬렉션 + */}
      <span className="header-title">{label}</span>
      {onPlusClick && (
        <span className="plus-icon" onClick={onPlusClick}>+</span>
      )}

       {/* 마이페이지- 최근 본 미디어 '편집' */}
      {editText && onEditClick && (
        <span className="right-action" onClick={onEditClick}>
          {editText}
        </span>
      )}

    
    </div>
  );
};

export default BackButton;