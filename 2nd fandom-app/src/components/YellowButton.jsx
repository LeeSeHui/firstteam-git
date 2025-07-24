import React from 'react';
import './YellowButton.css';

const YellowButton = ({ label, onClick, className = '' }) => {
  return (
    <button className={`yellow-btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default YellowButton;
