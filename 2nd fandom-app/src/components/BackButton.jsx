import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Backbutton.css';

const BackButton = ({
  to,
  label = '',
  onPlusClick,
  editText,
  onEditClick,
  onClick,
  className = '',
}) => {
  const navigate = useNavigate();
  const isDarkMode = document.body.classList.contains('dark');

  const handleBack = () => {
    if (onClick) return onClick();
    if (to) navigate(to);
    else navigate(-1);
  };

  return (
    <div className={`ButtonContainer ${className}`}>
      <button className="back-arrow" onClick={handleBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDarkMode ? '#fff' : '#444'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
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
