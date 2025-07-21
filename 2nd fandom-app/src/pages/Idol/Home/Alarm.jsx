import React, { useState } from 'react';
import './Alarm.css'; // 스타일은 이 파일에 정의한다고 가정
import newjeans from '../../../assets/Alarm/newjeans.png'
import blackpink from '../../../assets/Alarm/blackpink.png';
import gd from '../../../assets/Alarm/gd.png';
import thumbnail1 from '../../../assets/Alarm/thumbnail1.png';
import thumbnail2 from '../../../assets/Alarm/thumbnail2.png';
import thumbnail3 from '../../../assets/Alarm/thumbnail3.png';
import thumbnail4 from '../../../assets/Alarm/thumbnail4.png';

const tabs = ['전체', 'NewJeans', 'BLACKPINK', 'G-DRAGON'];

const mockData = {
  '오늘': [
    {
      id: 1,
      group: 'NewJeans',
      type: 'media',
      title: '새 미디어 : [Jean’s ZINE+] 뉴진스파랜드',
      time: '2025.07.15 12:54',
      profile: newjeans,
      thumbnail: thumbnail1,
    },
    {
      id: 2,
      group: 'BLACKPINK',
      type: 'notice',
      title: '공지 : BLACKPINK WORLD TOUR 운영 상세 안내',
      time: '2025.07.15 12:30',
      profile: blackpink,
      thumbnail: null,
    },
    {
      id: 3,
      group: 'BLACKPINK',
      type: 'media',
      title: '새 미디어 : BLACKPINK ‘뚜이 MV’',
      time: '2025.07.15 12:25',
      profile: blackpink,
      thumbnail: thumbnail2,
    },
    {
      id: 4,
      group: 'NewJeans',
      type: 'post',
      title: '새 글이 도착했어요 : 해인 포스팅 새 글',
      time: '2025.07.15 12:15',
      profile: newjeans,
      thumbnail: null,
    },
  ],
  '어제': [
    {
      id: 5,
      group: 'G-DRAGON',
      type: 'media',
      title: '새 미디어 : G-DRAGON - ‘TOO BAD’ MV Behind the Scenes',
      time: '2025.07.14 12:54',
      profile: gd,
      thumbnail: thumbnail3,
    },
    {
      id: 6,
      group: 'BLACKPINK',
      type: 'notice',
      title: '공지 : BLACKPINK WORLD TOUR 이벤트 당첨자 기프트 안내',
      time: '2025.07.14 12:30',
      profile: blackpink,
      thumbnail: null,
    },
  ],
  '2025.07.10': [
    {
      id: 7,
      group: 'NewJeans',
      type: 'media',
      title: '새 미디어 : [Jean’s ZINE+] 붐피크닉 Zip',
      time: '2025.07.10 12:54',
      profile: newjeans,
      thumbnail: thumbnail4,
    },
    {
      id: 8,
      group: 'BLACKPINK',
      type: 'post',
      title: '새 글이 도착했어요 : 제니 포스팅 새 글',
      time: '2025.07.10 12:30',
      profile: blackpink,
      thumbnail: null,
    },
    {
      id: 9,
      group: 'G-DRAGON',
      type: 'post',
      title: '새 글이 도착했어요 : 지드래곤 포스팅 새 글',
      time: '2025.07.10 12:30',
      profile: gd,
      thumbnail: null,
    },
  ]
};

const Alarm = () => {
  const [selectedTab, setSelectedTab] = useState('전체');

  const filteredData = Object.entries(mockData).reduce((acc, [date, items]) => {
    const filteredItems =
      selectedTab === '전체'
        ? items
        : items.filter((item) => item.group === selectedTab);
    if (filteredItems.length > 0) {
      acc[date] = filteredItems;
    }
    return acc;
  }, {});

  return (
    <div className="alarm-page">
      <h2 className="page-title">알림</h2>

      <div className="tab-list">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${selectedTab === tab ? 'active' : ''}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {Object.entries(filteredData).map(([date, items]) => (
        <div key={date} className="alarm-group">
          <h4 className="alarm-date">{date}</h4>
          {items.map((item) => (
            <div key={item.id} className="alarm-card">
              <img src={item.profile} alt="profile" className="profile-img" />
              <div className="alarm-info">
                <p className="alarm-title">{item.title}</p>
                <p className="alarm-time">{item.time}</p>
              </div>
              {item.thumbnail && (
                <img src={item.thumbnail} alt="thumb" className="thumb-img" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Alarm;
