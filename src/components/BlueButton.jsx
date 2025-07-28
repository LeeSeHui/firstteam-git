import React from 'react';
import './BlueButton.css';

const BlueButton = ({ label, onClick }) => {
  return (
    <button className="blue-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default BlueButton;
