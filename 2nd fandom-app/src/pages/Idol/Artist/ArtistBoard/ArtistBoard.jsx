import React from 'react';
import './ArtistBoard.css';

import herin from '../../../../assets/artist-select/herin.png';
import feedimg1 from '../../../../assets/artist/artistfeed1.png';
import feedimg2 from '../../../../assets/artist/artistfeed2.png';
import feedimg3 from '../../../../assets/artist/artistfeed3.png';
import feedimg4 from '../../../../assets/artist/artistfeed4.png';

const feedData = [
  {
    id: 1,
    profile: herin,
    name: '해린',
    time: '07.01. 05:06',
    text: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    img: feedimg1,
  },
  {
    id: 2,
    profile: herin,
    name: '해린',
    time: '07.01. 05:06',
    text: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    img: feedimg2,
  },
  {
    id: 3,
    profile: herin,
    name: '해린',
    time: '07.01. 05:06',
    text: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    img: feedimg3,
  },
  {
    id: 4,
    profile: herin,
    name: '해린',
    time: '07.01. 05:06',
    text: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    img: feedimg4,
  },
];

const ArtistBoard = () => {
  return (
    <div className="artist-board">
      {feedData.map((item) => (
        <div className="feed-card" key={item.id}>
          <div className="feed-header">
            <div className="profile-info">
              <img src={item.profile} alt={`${item.name} 프로필`} className="profile-img" />
              <div>
                <p className="nickname">{item.name} <span className="badge">✔️</span></p>
                <p className="time">{item.time}</p>
              </div>
            </div>
            <button className="bookmark-btn">🔖</button>
          </div>

          <p className="feed-text">
            {item.text.split('\n').map((line, index) => (
              <span key={index}>
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
          
          <div className="feed-image-wrapper">
            <img src={item.img} alt={`${item.name} 게시물`} className="feed-img" />
          </div>

        </div>
      ))}
    </div>
  );
};

export default ArtistBoard;
