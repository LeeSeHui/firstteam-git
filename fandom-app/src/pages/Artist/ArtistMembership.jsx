import React from 'react';
import './ArtistMembership.css';
import membershipcontents from '../../assets/membership-contents.png';
import membershipletter from '../../assets/membership-letter.png';
import membershipletter2 from '../../assets/membership-letter2.png';
import membershipletter3 from '../../assets/membership-letter3.png';

const ArtistMembership = () => {
  const lockedPosts = [
    { id: 1, src: membershipcontents, alt: 'membershipcontents' },
    { id: 2, src: membershipcontents, alt: 'membershipcontents' },
  ];

  const artistLetters = [
    { id: 1, img: membershipletter },
    { id: 2, img: membershipletter2 },
    { id: 3, img: membershipletter3 },
  ];

  return (
    <div className="membership-wrapper">
      {/* 상단 잠금 콘텐츠 */}
      <div className="locked-posts">
        {lockedPosts.map((post) => (
          <div key={post.id} className="locked-card">
            <img src={post.src} alt={post.alt} />
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
