import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../components/Nav'; 

// 각 페이지 import
import DM from '../pages/DM/DM';
import Fashion from '../pages/Fashion/Fashion';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

// home
import ArtistSectionBox from '../pages/Home/ArtistSectionBox';
import ArtistSelectBox from '../pages/Home/ArtistSelectBox';
import MyPage from '../pages/MyPage/MyPage';
import Vote from '../pages/MyPage/Vote';
import Quiz from '../pages/Quiz/Quiz';
import Live from '../pages/Live/Live';
import Artist from '../pages/Artist/Artist';
import Home from '../pages/Home/Home';
import Chart from '../pages/Chart/Chart';
import ArtistSelect from '../pages/Home/ArtistSelect';

// mypage
import Mission from '../pages/MyPage/Mission';
import Invite from '../pages/MyPage/Invite';
import Collection from '../pages/MyPage/Collection';
import Payment from '../pages/MyPage/Payment';
import History from '../pages/MyPage/History';
import Settings from '../pages/MyPage/Settings';

function AppRouter() {
  // 🟢 상태 선언
  const [selectedArtists, setSelectedArtists] = useState([]);

  return (
    <Router>
      <Nav />
      <Routes>
        {/* home */}
        <Route
          path="/"
          element={<Home selectedArtists={selectedArtists} />}
        />
        <Route
          path="/select-artist"
          element={
            <ArtistSelect
              setSelectedArtists={setSelectedArtists}
              selectedArtists={selectedArtists}
            />
          }
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/live" element={<Live />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/Fashion" element={<Fashion />} />
        
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

      </Routes>



    </Router>
  );
}

export default AppRouter;
