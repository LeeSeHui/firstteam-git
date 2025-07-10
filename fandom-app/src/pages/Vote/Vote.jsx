import React from 'react';
import './Vote.css'
import bannerImg from '../../assets/votemain.png'; // 상단 배너 이미지
import profile1 from '../../assets/vote.png';
import profile2 from '../../assets/vote.png';
import profile3 from '../../assets/vote.png';

const voteList = [
  {
    rank: 1,
    name: 'NewJeans - Attention',
    votes: '125,245,24표',
    img: profile1,
  },
  {
    rank: 2,
    name: 'NewJeans - Attention',
    votes: '125,245,24표',
    img: profile2,
  },
  {
    rank: 3,
    name: 'NewJeans - Attention',
    votes: '125,245,24표',
    img: profile3,
  },
];

const Vote = () => {
  return (
    <div className="vote-container">
      <img src={bannerImg} alt="K-Chart Vote Banner" className="vote-banner" />
      <div className="vote-info">
        <p className="vote-title">[798회] KBS 뮤직뱅크 K-Chart 1위 후보 주간 투표</p>
        <ul className="vote-bullets">
          <li>✔ 뮤직뱅크 798회 1위 선정에 Nuvie의 투표 결과 반영</li>
          <li>✔ 1인 1투표 가능</li>
        </ul>
        <p className="vote-period">기간: 2025.07.08 18:00 - 2025.07.10 00:00 KST</p>
      </div>

      <div className="vote-list">
        {voteList.map((item, idx) => (
          <div key={idx} className="vote-card">
            <div className="vote-rank">{item.rank}</div>
            <img src={item.img} alt={item.name} className="vote-img" />
            <div className="vote-details">
              <p className="vote-name">{item.name}</p>
              <p className="vote-count">{item.votes}</p>
              <div className="vote-bar">
                <div className="vote-bar-fill" style={{ width: `${100 - idx * 20}%` }}></div>
              </div>
            </div>
            <button className="vote-button">투표</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vote;
