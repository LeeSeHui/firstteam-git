import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Backbutton.css';
import backbutton from '../assets/backbutton.png';
import dark_backbutton from '../assets/dark/dark_backbutton.png';

const BackButton = ({
  to,
  label = '',
  onPlusClick,
  editText,
  onEditClick,
  onClick,
  className = '', // ✅ className 받기
}) => {
  const navigate = useNavigate();
  const isDarkMode = document.body.classList.contains('dark');

  const handleBack = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`ButtonContainer ${className}`}> {/* ✅ className 적용 */}
      <button className="back-arrow" onClick={handleBack}>
        <img
        src={isDarkMode ? dark_backbutton : backbutton}
        />
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
