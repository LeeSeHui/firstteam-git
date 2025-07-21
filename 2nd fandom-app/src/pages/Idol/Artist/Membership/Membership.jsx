import React, { useState } from 'react';
import './Membership.css';

import minji from '../../../../assets/artist-select/minji.png';
import feedimg1 from '../../../../assets/artist/membership1.png';
import feedimg2 from '../../../../assets/artist/membership2.png';

const feedData = [
  {
    id: 1,
    name: '민지',
    time: '07.01. 05:06',
    text: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    img: feedimg1,
  },
  {
    id: 2,
    name: '민지',
    time: '07.01. 05:06',
    text: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    img: feedimg2,
  },
];

const MembershipFeed = () => {
  const [unlockedFeedIds, setUnlockedFeedIds] = useState([]);

  const handleUnlock = (id) => {
    if (!unlockedFeedIds.includes(id)) {
      setUnlockedFeedIds([...unlockedFeedIds, id]);
    }
  };
  
return (
  <div className="membership-feed-wrapper">
  {feedData.map((item) => {
    const isUnlocked = unlockedFeedIds.includes(item.id);

return (
      <div className="feed-card" key={item.id} onClick={() => handleUnlock(item.id)}>
        {!isUnlocked && (
          <div className="locked-overlay">🔒 멤버십 전용 콘텐츠입니다.</div>
        )}

        <div className="feed-header">
          <div className="profile-info">
            <img src={minji} alt="프로필" className="profile-img" />
            <div>
              <p className="nickname">{item.name} <span className="badge">✔️</span></p>
              <p className="time">{item.time}</p>
            </div>
          </div>
          <button className="bookmark-btn">🔖</button>
        </div>

        <p className="feed-text">
          {item.text.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div className="post-footer">
          <div className="like-counts">
            <span>💛10K+</span>
            <span>💬10K+</span>
          </div>
        </div>

        <div className="feed-images">
          <img src={item.img} alt="피드 이미지" className="feed-img" />
        </div>
      </div>
    );
  })}
</div>
);
};

export default MembershipFeed;
