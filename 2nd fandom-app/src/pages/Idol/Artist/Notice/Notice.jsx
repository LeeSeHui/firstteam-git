import React from 'react';
import InfoBoard from './InfoBoard';
import './Notice.css';

const Notice = () => {
  return (
    <div className="notice-wrapper">
      <div className="notice-search">
        <input type="text" placeholder="Search" />
      </div>
      <InfoBoard />
    </div>
  );
};

export default Notice;