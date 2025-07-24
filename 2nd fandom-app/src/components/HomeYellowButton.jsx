import React from 'react';
import './HomeYellowButton.css';

const HomeYellowButton = ({ label, onClick }) => {
  return (
    <button className="home-yellow-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default HomeYellowButton;
