import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../components/Nav';

import Alart from '../pages/Alart/Alart';
import MyPage from '../pages/MyPage/MyPage';
import DM from '../pages/DM/DM';
import Login from '../pages/Auth/Login';
import Manual from '../pages/Auth/Manual';
import Fashion from '../pages/Fashion/Fashion';

// artist 
import MembershipInfo from '../pages/Artist/MembershipInfo';
import ArtistHighlight from '../pages/Artist/ArtistHighlight';
import ArtistDetail from '../pages/Artist/ArtistDetail';
import ArtistGallery from '../pages/Artist/ArtistGallery';
import ArtistMembership from '../pages/Artist/ArtistMembership';
import ArtistNotice from '../pages/Artist/ArtistNotice';




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

function AppRouter() {
  const [selectedArtists] = useState([]);

  return (
    <Router>
      <Nav />
      <Routes>
        {/* home */}
        <Route path="/" element={<Home selectedArtists={selectedArtists} />} />
        <Route path="/alart" element={<Alart />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/live" element={<Live />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/dm" element={<DM />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/membership" element={<MembershipInfo />} />
        <Route path="/select-artist" element={<ArtistSelectBox />} />
        <Route path="/vote" element={<Vote />} />

        {/* Artist 중첩 라우터 */}
        <Route path="/artist" element={<Artist />}>
          <Route index element={<ArtistHighlight />} />
          <Route path="highlight" element={<ArtistHighlight />} />
          <Route path="detail" element={<ArtistDetail />} />
          <Route path="gallery" element={<ArtistGallery />} />
          <Route path="membership" element={<ArtistMembership />} />
          <Route path="notice" element={<ArtistNotice />} />
        </Route>

        {/* mypage */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />

        {/* login */}
        <Route path="/login" element={<Login />} />
        <Route path="/manual" element={<Manual />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
