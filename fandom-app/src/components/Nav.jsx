import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Nav.css';

function Nav({ setMainHome }) {
  const [showSubButtons, setShowSubButtons] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef();

  const toggleSubButtons = () => {
    setShowSubButtons(!showSubButtons);
  };

  const handleNavigate = (path) => {
    setMainHome(path);
    navigate(path);
    setShowSubButtons(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowSubButtons(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const currentPath = location.pathname;

  // ✅ 버튼에 표시할 텍스트 결정
  let buttonText = 'i-dol';
  if (currentPath === '/idol') buttonText = 'Idol';
  else if (currentPath === '/actor') buttonText = 'Actor';
  else if (currentPath === '/trot') buttonText = 'Trot';

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
          {currentPath === '/' && (
            <>
              <button onClick={() => handleNavigate('/trot')}>Trot</button>
              <button onClick={() => handleNavigate('/actor')}>Actor</button>
            </>
          )}
          {currentPath === '/idol' && (
            <>
              <button onClick={() => handleNavigate('/actor')}>Actor</button>
              <button onClick={() => handleNavigate('/trot')}>Trot</button>
            </>
          )}
          {currentPath === '/actor' && (
            <>
              <button onClick={() => handleNavigate('/idol')}>Idol</button>
              <button onClick={() => handleNavigate('/trot')}>Trot</button>
            </>
          )}
          {currentPath === '/trot' && (
            <>
              <button onClick={() => handleNavigate('/idol')}>Idol</button>
              <button onClick={() => handleNavigate('/actor')}>Actor</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
