import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ArtistLayout = () => {
  const navigate = useNavigate();

  const ArtistMembership = () => navigate('/idol/home/membership');

  return (
    <div>
      <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
        <h2>Artist Header 고정 영역</h2>
        <button onClick={ArtistMembership}>+ Membership</button>
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
