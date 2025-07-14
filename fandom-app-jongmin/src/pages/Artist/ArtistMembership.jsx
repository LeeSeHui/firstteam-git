import React from 'react';
import './ArtistMembership.css';
import lockIcon from '../../assets/lock.png';

const ArtistMembership = () => {
  const lockedPosts = [
    { id: 1, img: '/img/gallery1.jpg', text: '멤버십 전용 콘텐츠입니다.' },
    { id: 2, img: '/img/gallery2.jpg', text: '멤버십 전용 콘텐츠입니다.' },
  ];

  const artistLetters = [
    { id: 1, img: '/img/gallery3.jpg', text: '멤버십 전용 콘텐츠입니다.' },
    { id: 2, img: '/img/gallery4.jpg', text: '멤버십 전용 콘텐츠입니다.' },
    { id: 3, img: '/img/gallery5.jpg', text: '멤버십 전용 콘텐츠입니다.' },
  ];

  return (
    <div className="membership-wrapper">
      {/* 상단 잠금 콘텐츠 */}
      <div className="locked-posts">
        {lockedPosts.map((post) => (
          <div key={post.id} className="locked-card">
            <img src={post.img} alt={`locked-${post.id}`} />
            <div className="lock-overlay">
              <img src={lockIcon} alt="lock" className="lock-icon" />
              <p>{post.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 아티스트 레터 */}
      <div className="artist-letter-section">
        <h4>뉴진스가 학생방에게 보내는 Artist Letter 💌</h4>
        <div className="letter-list">
          {artistLetters.map((letter) => (
            <div key={letter.id} className="letter-card">
              <img src={letter.img} alt={`letter-${letter.id}`} />
              <div className="lock-overlay">
                <img src={lockIcon} alt="lock" className="lock-icon" />
                <p>{letter.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="more-btn">더보기</button>
      </div>
    </div>
  );
};

export default ArtistMembership;