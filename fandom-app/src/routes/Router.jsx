import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../components/Nav';

import Alart from '../pages/Alart/Alart';
import MyPage from '../pages/MyPage/MyPage';
import DM from '../pages/DM/DM';
import Login from '../pages/Auth/Login';
import Manual from '../pages/Auth/Manual';
import Fashion from '../pages/Fashion/Fashion';


// home
import Quiz from '../pages/Quiz/Quiz';
import Live from '../pages/Live/Live';
import Artist from '../pages/Artist/Artist';
import ArtistSelectBox from '../pages/Home/ArtistSelectBox';
import Home from '../pages/Home/Home';
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
  const [selectedArtists] = useState([]);

  return (
    <Router>
      <Nav />
      <Routes>
        {/* home */}
        <Route path="/alart" element={<Alart />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route
          path="/"
          element={<Home selectedArtists={selectedArtists} />}
        />
      
        <Route path="/live" element={<Live />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/dm" element={<DM />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/select-artist" element={<ArtistSelectBox />}/>
        
        {/* mypage */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vote" element={<Vote />} />

        {/* login */}
        <Route path="/login" element={<Login />} />
        <Route path="/manual" element={<Manual />} />

      </Routes>
    </Router>
  );
}

export default AppRouter;
