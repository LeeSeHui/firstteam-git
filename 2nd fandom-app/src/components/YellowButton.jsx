import React from 'react';
import './YellowButton.css';

const YellowButton = ({ label, onClick }) => {
  return (
    <button className="yellow-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default YellowButton;
