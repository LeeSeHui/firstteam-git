import React from 'react';
import './PupleButton.css';

const PupleButton = ({ label, onClick }) => {
  return (
    <button className="puple-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default PupleButton;
