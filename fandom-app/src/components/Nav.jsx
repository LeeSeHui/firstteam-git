import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/dm" style={{ marginRight: '10px' }}>Chat</Link>
      <Link to="/artist" style={{ marginRight: '10px' }}>Artist</Link>
      <Link to="/fashion" style={{ marginRight: '10px' }}>Fashion</Link>
      <Link to="/mypage" style={{ marginRight: '10px' }}>MyPage</Link>
    </nav>
  );
}

export default Nav;