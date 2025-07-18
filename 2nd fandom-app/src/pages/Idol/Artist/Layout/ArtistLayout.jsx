import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import artistImg from '../../../../assets/artist/main-img.png'; // 경로 맞게 수정
import './ArtistLayout.css'; // ⭐ CSS 파일 임포트

const ArtistLayout = () => {
  const navigate = useNavigate();

  const ArtistMembership = () => navigate('/idol/home/membership');

  return (
    <div>
      <div className="artistHeader">
        <img src={artistImg} alt="artist" className="artistImage" />
        <div className="artistOverlay">
          <h2 className="artistName">NewJeans</h2>
          <button onClick={ArtistMembership} className="membershipButton">+ Membership</button>
        </div>
      </div>

      <div className="artistNav">
        <button onClick={() => navigate('/idol/artist/highlight')}>Highlight</button>
        <button onClick={() => navigate('/idol/artist/artist-board')}>Artist</button>
        <button onClick={() => navigate('/idol/artist/artist-gallery')}>Gallery</button>
        <button onClick={() => navigate('/idol/artist/artist-membership')}>Membership</button>
        <button onClick={() => navigate('/idol/artist/artist-notice')}>Notice</button>
      </div>

      <Outlet />
    </div>
  );
};

export default ArtistLayout;
