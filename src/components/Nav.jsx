import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Home as HomeIcon,
  MessageCircle,
  Video,
  Star
} from 'lucide-react';
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
      <div className="nav-content">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          <HomeIcon size={28} strokeWidth={1.5} />
          <span>home</span>
        </Link>
        <Link to="/dm" className={`nav-link ${location.pathname === '/dm' ? 'active' : ''}`}>
          <MessageCircle size={28} strokeWidth={1.5} />
          <span>chat</span>
        </Link>

        <button className="idol-button" onClick={toggleSubButtons}>{buttonText}</button>

        <Link to="/fashion" className={`nav-link star-lens-link ${location.pathname === '/fashion' ? 'active' : ''}`}>
          <Video size={28} strokeWidth={1.5} />
          <span>Star Lens</span>
        </Link>
        <Link to="/mypage" className={`nav-link ${location.pathname === '/mypage' ? 'active' : ''}`}>
          <Star size={28} strokeWidth={1.5} />
          <span>me</span>
        </Link>
      </div>

      {/* ✅ sub 버튼 */}
      {showSubButtons && (
        <div className="sub-buttons">
          {currentMain !== '/idol' && <button onClick={() => handleNavigate('/idol')}>Idol</button>}
          {currentMain !== '/actor' && <button onClick={() => handleNavigate('/actor')}>Actor</button>}
          {currentMain !== '/trot' && <button onClick={() => handleNavigate('/trot')}>Trot</button>}
        </div>
      )}
    </nav>
  );
}

export default Nav;
