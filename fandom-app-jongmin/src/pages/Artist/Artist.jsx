import { Outlet, NavLink } from 'react-router-dom';
import profileImg from '../../assets/artist_actor.png'; // 뉴진스 이미지로 바꾸면 더 좋음!
import './Artist.css';
import BackButton from '../../components/Backbutton';

const Artist = () => {
  return (
    <>
      <BackButton to="/home" />

      {/* 아티스트 헤더 */}
      <section className="artist-header">
        <img src={profileImg} alt="artist" className="artist-profile-img" />
        <h1 className="artist-name">NewJeans</h1>
        <button className="membership-btn">+ Membership</button>
      </section>

      {/* 탭 메뉴 */}
      <div className="artist-tabs">
        <ul>
          <li><NavLink to="highlight" className={({ isActive }) => isActive ? 'active' : ''}>Highlight</NavLink></li>
          <li><NavLink to="detail" className={({ isActive }) => isActive ? 'active' : ''}>Artist</NavLink></li>
          <li><NavLink to="gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink></li>
          <li><NavLink to="membership" className={({ isActive }) => isActive ? 'active' : ''}>Membership</NavLink></li>
          <li><NavLink to="notice" className={({ isActive }) => isActive ? 'active' : ''}>Notice</NavLink></li>
        </ul>
      </div>

      {/* 선택된 탭 콘텐츠 영역 */}
      <Outlet />
    </>
  );
};

export default Artist;