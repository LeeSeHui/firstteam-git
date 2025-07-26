// nav-frame 이미지 없이 코드만으로 구현한 Nav

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

import homeIcon from '../assets/Home/homeicon.png';
import homeIconDark from '../assets/Home/homeicon-dark.png';
import chatIcon from '../assets/Home/chaticon.png';
import chatIconDark from '../assets/Home/chaticon-dark.png';
import fashionIcon from '../assets/Home/fashionicon.png';
import fashionIconDark from '../assets/Home/fashionicon-dark.png';
import mypageIcon from '../assets/Home/mypageicon.png';
import mypageIconDark from '../assets/Home/mypageicon-dark.png';

import homeIconActive from '../assets/Home/homeicon-active.png';
import chatIconActive from '../assets/Home/chaticon-active.png';
import fashionIconActive from '../assets/Home/fashionicon-active.png';
import mypageIconActive from '../assets/Home/mypageicon-active.png';

import homeIconActiveActor from '../assets/Home/homeicon-active-actor.png';
import chatIconActiveActor from '../assets/Home/chaticon-active-actor.png';
import fashionIconActiveActor from '../assets/Home/fashionicon-active-actor.png';
import mypageIconActiveActor from '../assets/Home/mypageicon-active-actor.png';

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
  const { darkMode } = useTheme();

  useEffect(() => {
    if (location.pathname.startsWith('/idol')) setCurrentMain('/idol');
    else if (location.pathname.startsWith('/actor')) setCurrentMain('/actor');
    else if (location.pathname.startsWith('/trot')) setCurrentMain('/trot');
  }, [location.pathname]);

  if (location.pathname === '/idol/home/live') return null;

  const toggleSubButtons = () => {
    setShowSubButtons(!showSubButtons);
  };

  const handleNavigate = (path) => {
    navigate(`${path}/home`);
    setShowSubButtons(false);
    setCurrentMain(path);
  };

  const getNavIcon = (page, light, dark, active, actor, trot) => {
    const isActive = location.pathname === `${currentMain}/${page}`;
    if (isActive) {
      if (currentMain === '/idol') return active;
      if (currentMain === '/actor') return actor;
      if (currentMain === '/trot') return trot;
    }
    return darkMode ? dark : light;
  };

  const buttonText = currentMain === '/idol' ? 'Idol'
    : currentMain === '/actor' ? 'Actor'
    : currentMain === '/trot' ? 'Trot' : 'i-dol';

  return (
    <nav className={`nav-container ${darkMode ? 'dark' : ''}`}>
      <div className="nav-content">
        <Link to={`${currentMain}/home`} className="nav-link">
          <img src={getNavIcon('home', homeIcon, homeIconDark, homeIconActive, homeIconActiveActor, homeIconActiveTrot)} alt="home" className="nav-icon" />
          <span className={`nav-text ${location.pathname === `${currentMain}/home` ? currentMain.replace('/', '') : ''}`}>Home</span>
        </Link>

        <Link to={`${currentMain}/chat`} className="nav-link">
          <img src={getNavIcon('chat', chatIcon, chatIconDark, chatIconActive, chatIconActiveActor, chatIconActiveTrot)} alt="chat" className="nav-icon" />
          <span className={`nav-text ${location.pathname === `${currentMain}/chat` ? currentMain.replace('/', '') : ''}`}>Chat</span>
        </Link>

        <button className={`nav-main-button ${currentMain.replace('/', '')}`} onClick={toggleSubButtons}>
          {buttonText}
        </button>

        <Link to={`${currentMain}/fashion/all`} className="nav-link">
          <img src={getNavIcon('fashion', fashionIcon, fashionIconDark, fashionIconActive, fashionIconActiveActor, fashionIconActiveTrot)} alt="fashion" className="nav-icon" />
          <span className={`nav-text ${location.pathname === `${currentMain}/fashion` ? currentMain.replace('/', '') : ''}`}>Fashion</span>
        </Link>

        <Link to={`${currentMain}/mypage`} className="nav-link">
          <img src={getNavIcon('mypage', mypageIcon, mypageIconDark, mypageIconActive, mypageIconActiveActor, mypageIconActiveTrot)} alt="mypage" className="nav-icon" />
          <span className={`nav-text ${location.pathname === `${currentMain}/mypage` ? currentMain.replace('/', '') : ''}`}>Me</span>
        </Link>
      </div>

      {showSubButtons && (
        <div className="sub-buttons">
          {currentMain !== '/idol' && <button className="idol" onClick={() => handleNavigate('/idol')}>Idol</button>}
          {currentMain !== '/actor' && <button className="actor" onClick={() => handleNavigate('/actor')}>Actor</button>}
          {currentMain !== '/trot' && <button className="trot" onClick={() => handleNavigate('/trot')}>Trot</button>}
        </div>
      )}
    </nav>
  );
}

export default Nav;
