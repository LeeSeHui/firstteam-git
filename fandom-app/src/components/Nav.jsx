
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Nav.css';

function Nav() {
  const [showSubButtons, setShowSubButtons] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef();

  const toggleSubButtons = () => {
    setShowSubButtons(!showSubButtons);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setShowSubButtons(false);
  };

  // 화면 아무 데나 클릭하면 버튼 숨김
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

  return (
    <nav className="nav-container" ref={navRef}>
      <Link to="/">Home</Link>
      <Link to="/dm">Chat</Link>
      <button className="idol-button" onClick={toggleSubButtons}>i-dol</button>
      <Link to="/fashion">Fashion</Link>
      <Link to="/mypage">MyPage</Link>
      <Link to="/login">Login</Link>

      {showSubButtons && (
        <div className="sub-buttons">
          <button onClick={() => handleNavigate('/actor')}>Actor</button>
          <button onClick={() => handleNavigate('/trot')}>Trot</button>
        </div>
      )}

export default Nav;
