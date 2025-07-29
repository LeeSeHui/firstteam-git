import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import artistImg from '../../../../assets/artist/main-img.png';
import './ArtistLayout.css';

const ArtistLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const ArtistMembership = () => navigate('/idol/home/membership');

  // ✅ navTabs 선언 누락된 부분 추가
  const navTabs = [
    { name: 'Highlight', path: '/idol/artist/highlight' },
    { name: 'Artist', path: '/idol/artist/artist-board' },
    { name: 'Gallery', path: '/idol/artist/artist-gallery' },
    { name: 'Membership', path: '/idol/artist/artist-membership' },
    { name: 'Notice', path: '/idol/artist/artist-notice' },
  ];

  return (
    <div>
      <div className="artistHeader">
        <img src={artistImg} alt="artist" className="artistImage" />
        <div className="artistOverlay">
          <h2 className="artistName">NewJeans</h2>
          <button onClick={ArtistMembership} className="membershipButton">+ Membership</button>
        </div>
      </div>

      {/* ✅ 이 부분 하나만 쓰면 됨. 아래 중복된 artistNav는 지워도 됨 */}
      <div className="artistNav">
        {navTabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => navigate(tab.path)}
            className={`navButton ${location.pathname === tab.path ? 'active' : ''}`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default ArtistLayout;
