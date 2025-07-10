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

    <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/dm" style={{ marginRight: '10px' }}>Chat</Link>
      <Link to="/artist" style={{ marginRight: '10px' }}>Artist</Link>
      <Link to="/fashion" style={{ marginRight: '10px' }}>Fashion</Link>
      <Link to="/mypage" style={{ marginRight: '10px' }}>MyPage</Link>
      <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>

    </nav>
  );
}

export default Nav;