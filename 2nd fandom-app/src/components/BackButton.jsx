import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Backbutton.css';
import backbutton from '../assets/BackButton.png'

const BackButton = ({ to, label = '', onPlusClick }) => {
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
      <span className="header-title">{label}</span>
      {onPlusClick && (
        <span className="plus-icon" onClick={onPlusClick}>+</span>
      )}
    </div>
  );
};

export default BackButton;