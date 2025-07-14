import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Nav.css';

function Nav({ setMainHome }) {
  const [showSubButtons, setShowSubButtons] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef();

  const [currentMain, setCurrentMain] = useState('/idol'); // 기본 메인 값

  useEffect(() => {
    // Idol, Actor, Trot 페이지에 들어오면 currentMain 갱신
    if (location.pathname === '/idol' || location.pathname === '/actor' || location.pathname === '/trot') {
      setCurrentMain(location.pathname);
    }
  }, [location.pathname]);

  const toggleSubButtons = () => {
    setShowSubButtons(!showSubButtons);
  };

  const handleNavigate = (path) => {
    setMainHome(path);
    navigate(path);
    setShowSubButtons(false);
    setCurrentMain(path); // 버튼 클릭 시에도 currentMain 갱신
  };

  // ✅ 버튼에 표시할 텍스트 결정
  let buttonText = 'i-dol';
  if (currentMain === '/idol') buttonText = 'Idol';
  else if (currentMain === '/actor') buttonText = 'Actor';
  else if (currentMain === '/trot') buttonText = 'Trot';

  return (
    <nav className="nav-container" ref={navRef}>
      <Link to="/">Home</Link>
      <Link to="/dm">Chat</Link>
      <button className="idol-button" onClick={toggleSubButtons}>{buttonText}</button>
      <Link to="/fashion">Fashion</Link>
      <Link to="/mypage">MyPage</Link>
      <Link to="/login">Login</Link>

      {showSubButtons && (
        <div className="sub-buttons">
          {currentMain === '/idol' && (
            <>
              <button onClick={() => handleNavigate('/actor')}>Actor</button>
              <button onClick={() => handleNavigate('/trot')}>Trot</button>
            </>
          )}
          {currentMain === '/actor' && (
            <>
              <button onClick={() => handleNavigate('/idol')}>Idol</button>
              <button onClick={() => handleNavigate('/trot')}>Trot</button>
            </>
          )}
          {currentMain === '/trot' && (
            <>
              <button onClick={() => handleNavigate('/idol')}>Idol</button>
              <button onClick={() => handleNavigate('/actor')}>Actor</button>
            </>
          )}
          {currentMain === '/' && (
            <>
              <button onClick={() => handleNavigate('/trot')}>Trot</button>
              <button onClick={() => handleNavigate('/actor')}>Actor</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
