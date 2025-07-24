import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import navFrame from '../assets/Home/navframeNew.png';
import homeIcon from '../assets/Home/homeicon.png';
import chatIcon from '../assets/Home/chaticon.png';
import fashionIcon from '../assets/Home/fashionicon.png';
import mypageIcon from '../assets/Home/mypageicon.png';
// IDOL
import homeIconActive from '../assets/Home/homeicon-active.png';
import chatIconActive from '../assets/Home/chaticon-active.png';
import fashionIconActive from '../assets/Home/fashionicon-active.png';
import mypageIconActive from '../assets/Home/mypageicon-active.png';
// Actor
import homeIconActiveActor from '../assets/Home/homeicon-active-actor.png';
import chatIconActiveActor from '../assets/Home/chaticon-active-actor.png';
import fashionIconActiveActor from '../assets/Home/fashionicon-active-actor.png';
import mypageIconActiveActor from '../assets/Home/mypageicon-active-actor.png';
// Trot
import homeIconActiveTrot from '../assets/Home/homeicon-active-trot.png';
import chatIconActiveTrot from '../assets/Home/chaticon-active-trot.png';
import fashionIconActiveTrot from '../assets/Home/fashionicon-active-trot.png';
import mypageIconActiveTrot from '../assets/Home/mypageicon-active-trot.png';
import './Nav.css';

  function Nav() {
    const [showSubButtons, setShowSubButtons] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [currentMain, setCurrentMain] = useState('/idol');

    // ✅ URL에 따라 현재 메인 상태 업데이트
    useEffect(() => {
      if (location.pathname.startsWith('/idol')) setCurrentMain('/idol');
      else if (location.pathname.startsWith('/actor')) setCurrentMain('/actor');
      else if (location.pathname.startsWith('/trot')) setCurrentMain('/trot');
    }, [location.pathname]);

    // ✅ Live 페이지에서는 Nav 숨김
    if (location.pathname === '/idol/home/live') return null;

    // ✅ 메인 버튼 토글
    const toggleSubButtons = () => {
      setShowSubButtons(!showSubButtons);
    };

    // ✅ sub 버튼 클릭 시 이동
    const handleNavigate = (path) => {
      navigate(`${path}/home`);
      setShowSubButtons(false);
      setCurrentMain(path);
    };

  // ✅ 메인 버튼 텍스트
  let buttonText = 'i-dol';
  if (currentMain === '/idol') buttonText = 'Idol';
  else if (currentMain === '/actor') buttonText = 'Actor';
  else if (currentMain === '/trot') buttonText = 'Trot';

  return (
    <nav className="nav-container">
       <img src={navFrame} alt="nav-frame" className="nav-frame" />
      <div className="nav-content">
     {/* 홈 */}
      <Link to={`${currentMain}/home`} className="nav-link">
        <img
          src={
            location.pathname === `${currentMain}/home`
              ? currentMain === '/idol' ? homeIconActive
              : currentMain === '/actor' ? homeIconActiveActor
              : currentMain === '/trot' ? homeIconActiveTrot
              : homeIcon
              : homeIcon
          }
          alt="home"
          className="nav-icon"
        />
        <span className={
          location.pathname === `${currentMain}/home`
            ? currentMain === '/idol' ? 'active-text idol'
            : currentMain === '/actor' ? 'active-text actor'
            : currentMain === '/trot' ? 'active-text trot'
            : ''
            : ''
        }>
          Home
        </span>
      </Link>

        {/* 채팅 */}
            <Link to={`${currentMain}/chat`} className="nav-link">
          <img
            src={
              location.pathname === `${currentMain}/chat`
                ? currentMain === '/idol' ? chatIconActive
                : currentMain === '/actor' ? chatIconActiveActor
                : currentMain === '/trot' ? chatIconActiveTrot
                : chatIcon
                : chatIcon
            }
            alt="chat"
            className="nav-icon"
          />
          <span className={
            location.pathname === `${currentMain}/chat`
              ? currentMain === '/idol' ? 'active-text idol'
              : currentMain === '/actor' ? 'active-text actor'
              : currentMain === '/trot' ? 'active-text trot'
              : ''
              : ''
          }>
            Chat
          </span>
        </Link>

      {/* 가운데 버튼 */}
       <button className={`idol-button ${currentMain.replace('/', '')}`} onClick={toggleSubButtons}>
        {buttonText}
      </button>

      {/* 패션 */}
          <Link to={`${currentMain}/fashion`} className="nav-link">
        <img
          src={
            location.pathname === `${currentMain}/fashion`
              ? currentMain === '/idol' ? fashionIconActive
              : currentMain === '/actor' ? fashionIconActiveActor
              : currentMain === '/trot' ? fashionIconActiveTrot
              : fashionIcon
              : fashionIcon
          }
          alt="fashion"
          className="nav-icon"
        />
        <span className={
          location.pathname === `${currentMain}/fashion`
            ? currentMain === '/idol' ? 'active-text idol'
            : currentMain === '/actor' ? 'active-text actor'
            : currentMain === '/trot' ? 'active-text trot'
            : ''
            : ''
        }>
          Fashion
        </span>
      </Link>

      {/* 마이페이지 */}
      <Link to={`${currentMain}/mypage`} className="nav-link">
        <img
          src={
            location.pathname === `${currentMain}/mypage`
              ? currentMain === '/idol' ? mypageIconActive
              : currentMain === '/actor' ? mypageIconActiveActor
              : currentMain === '/trot' ? mypageIconActiveTrot
              : mypageIcon
              : mypageIcon
          }
          alt="mypage"
          className="nav-icon"
        />
        <span className={
          location.pathname === `${currentMain}/mypage`
            ? currentMain === '/idol' ? 'active-text idol'
            : currentMain === '/actor' ? 'active-text actor'
            : currentMain === '/trot' ? 'active-text trot'
            : ''
            : ''
        }>
          Me
        </span>
      </Link>
    </div>

      {/* ✅ sub 버튼 */}
     {showSubButtons && (
  <div className="sub-buttons">
    {currentMain !== '/idol' && (
      <button
        className="idol"
        onClick={() => handleNavigate('/idol')}
      >
        Idol
      </button>
    )}
    {currentMain !== '/actor' && (
      <button
        className="actor"
        onClick={() => handleNavigate('/actor')}
      >
        Actor
      </button>
    )}
    {currentMain !== '/trot' && (
      <button
        className="trot"
        onClick={() => handleNavigate('/trot')}
      >
        Trot
      </button>
    )}
  </div>
)}
    </nav>
  );
}

export default Nav;
