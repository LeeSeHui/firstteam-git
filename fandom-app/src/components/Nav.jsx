import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <nav>
      <Link to="/" className='nav-item'>Home</Link>
      <Link to="/dm" className='nav-item'>Chat</Link>
      <Link to="/artist" className='nav-item'>Artist</Link>
      <Link to="/fashion" className='nav-item'>Fashion</Link>
      <Link to="/mypage" className='nav-item'>MyPage</Link>
    </nav>
  );
}

export default Nav;