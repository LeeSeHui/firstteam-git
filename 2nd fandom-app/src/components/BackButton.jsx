import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Backbutton.css';
import backbutton from '../assets/BackButton.png'


const BackButton = ({
  to,
  label = '뒤로가기',
  onPlusClick,
  editText,
  onEditClick,
  onClick, // ✅ 추가
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick(); // ✅ 커스텀 핸들러 우선
      return;
    }

    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="ButtonContainer">
      <button className="back-arrow" onClick={handleBack}>
        <img src={backbutton} alt="" />
      </button>

      <span className="header-title">{label}</span>

      {onPlusClick && (
        <span className="plus-icon" onClick={onPlusClick}>+</span>
      )}

      {editText && onEditClick && (
        <span className="right-action" onClick={onEditClick}>
          {editText}
        </span>
      )}
    </div>
  );
};


export default BackButton;