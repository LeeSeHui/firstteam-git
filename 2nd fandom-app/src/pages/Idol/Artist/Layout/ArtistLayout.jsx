import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import artistImg from '../../../../assets/artist/main-img.png';
import checkIcon from '../../../../assets/Vector.png';
import './ArtistLayout.css';

const ArtistLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // 1️⃣ 경로 따라 상태 초기화
    if (
      location.pathname === '/idol/artist/highlight' &&
      location.state?.subscribed
    ) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }
  
    // 2️⃣ 외부 이벤트로도 상태 업데이트 가능하게!
    const handleSubscribe = () => {
      setIsSubscribed(true);
    };
    window.addEventListener('subscribed-event', handleSubscribe);
  
    return () => {
      window.removeEventListener('subscribed-event', handleSubscribe);
    };
  }, [location]);
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
            className={`membershipButton ${isSubscribed ? 'active' : ''}`}
          >
            {isSubscribed ? (
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
