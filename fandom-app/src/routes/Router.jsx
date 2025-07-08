import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav'; 

// 각 페이지 import
import Home from '../pages/Home/Home';
import DM from '../pages/DM/DM';
import Artist from '../pages/Artist/Artist';
import Fashion from '../pages/Fashion/Fashion';
import MyPage from '../pages/MyPage/MyPage';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

// mypage
import Mission from '../pages/MyPage/Mission';
import Invite from '../pages/MyPage/Invite';
import Collection from '../pages/MyPage/Collection';
import Payment from '../pages/MyPage/Payment';
import History from '../pages/MyPage/History';
import Settings from '../pages/MyPage/Settings';
import Vote from '../pages/MyPage/Vote';

function AppRouter() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />
        <Route path="/dm" element={<DM />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* mypage */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vote" element={<Vote />} /> {/* 이미 있다면 생략 */}
      </Routes>
    </Router>
  );
}

export default AppRouter;