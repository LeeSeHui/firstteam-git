import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import artistImg from '../../../../assets/artist/main-img.png';
import checkIcon from '../../../../assets/Vector.png';
import './ArtistLayout.css';

const ArtistLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [subscribed, setSubscribed] = useState(false); // 이름 통일

  useEffect(() => {
    // 새로고침 시 초기 상태 (항상 false)
    setSubscribed(false);

    const handleSubscribe = () => {
      setSubscribed(true);
    };

    // 이벤트 리스너 등록
    window.addEventListener('subscribed-event', handleSubscribe);
    return () => window.removeEventListener('subscribed-event', handleSubscribe);
  }, []);

  const ArtistMembership = () => navigate('/idol/home/membership');

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
          <button
            onClick={ArtistMembership}
            className={`membershipButton ${subscribed ? 'active' : ''}`}
          >
            {subscribed ? (
              <>
                <img src={checkIcon} alt="checkicon" className="checkIcon" />
                Membership
              </>
            ) : (
              '+ Membership'
            )}
          </button>
        </div>
      </div>

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
