import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../components/Nav';
import ArtistSelect from '../pages/ArtistSelect';
import IdolHome from '../pages/Home/IdolHome';
import ActorHome from '../pages/Home/ActorHome';
import TrotHome from '../pages/Home/TrotHome';

// 기타 페이지 import
import Alart from '../pages/Alart/Alart';
import DM from '../pages/DM/DM';
import Login from '../pages/Auth/Login';
import Manual from '../pages/Auth/Manual';
import Fashion from '../pages/Fashion/Fashion';
import MembershipInfo from '../pages/Artist/MembershipInfo';
import MyPage from '../pages/MyPage/MyPage';


// home
import Quiz from '../pages/Quiz/Quiz';
import Live from '../pages/Live/Live';
import Artist from '../pages/Artist/Artist';
import Chart from '../pages/Chart/Chart';
import Vote from '../pages/Home/Vote';



// mypage

import Mission from '../pages/MyPage/Mission';
import Invite from '../pages/MyPage/Invite';
import Collection from '../pages/MyPage/Collection';
import Payment from '../pages/MyPage/Payment';
import History from '../pages/MyPage/History';
import Settings from '../pages/MyPage/Settings';
// my page vote 일단 삭제함

function AppRouter() {
  const [selectedArtists, setSelectedArtists] = useState([]);

  return (
    <Router>
      <Nav />
      <Routes>
        {/* 기본 홈을 IdolHome으로 설정 */}
        <Route path="/" element={<IdolHome selectedArtists={selectedArtists} />} />
        <Route path="/idol" element={<IdolHome selectedArtists={selectedArtists} />} />
        <Route path="/actor" element={<ActorHome selectedArtists={selectedArtists} />} />
        <Route path="/trot" element={<TrotHome selectedArtists={selectedArtists} />} />

        {/* 기타 페이지 */}
        <Route path="/alart" element={<Alart />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/live" element={<Live />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/dm" element={<DM />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/vote" element={<Vote />} />

        <Route
          path="/select-artist"
          element={<ArtistSelect setSelectedArtists={setSelectedArtists} selectedArtists={selectedArtists} />}
        />

        {/* 마이페이지 세부 */}

        <Route path="/membership" element={<MembershipInfo />} />
    
        
        {/* mypage */}

        <Route path="/mission" element={<Mission />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />

        {/* 로그인 관련 */}
        <Route path="/login" element={<Login />} />
        <Route path="/manual" element={<Manual />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
