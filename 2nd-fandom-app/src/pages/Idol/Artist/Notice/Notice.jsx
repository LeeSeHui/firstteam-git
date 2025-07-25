import React from 'react';
import InfoBoard from './InfoBoard';
import './Notice.css';
import '../../../../index.css';

import search from '../../../../assets/dm/search.png';
const Notice = () => {
  return (
    <div className="notice-wrapper">
      <div className="notice-search">
        <img src={search} alt="검색" className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <InfoBoard />
    </div>
  );
};

export default Notice;