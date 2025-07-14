import React from 'react';
import './ArtistNotice.css';

const notices = [
  { id: 1, title: '[안내] NewJeans Global Fansign event 상세 안내 (+Eng)' },
  { id: 2, title: '[안내] NewJeans Global Fansign event 상세 안내 (+Eng)' },
  { id: 3, title: '[안내] NewJeans Global Fansign event 상세 안내 (+Eng)' },
  { id: 4, title: '[안내] NewJeans Global Fansign event 상세 안내 (+Eng)' },
  { id: 5, title: '[안내] NewJeans Global Fansign event 상세 안내 (+Eng)' },
  { id: 6, title: '[안내] NewJeans Global Fansign event 상세 안내 (+Eng)' },
  { id: 7, title: '[안내] NewJeans Global Fansign event 상세 안내 (+Eng)' },
];

const Notice = () => {
  return (
    <div className="notice-wrapper">
      <div className="notice-search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="notice-list">
        {notices.map((notice) => (
          <div className="notice-item" key={notice.id}>
            <span>{notice.title}</span>
            <span className="arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
