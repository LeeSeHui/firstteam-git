import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Onboarding
import Splash from '../pages/Onboarding/Splash';
import Login from '../pages/Onboarding/Login';
import Manual from '../pages/Onboarding/Manual';
import SelectCharacter from '../pages/Onboarding/SelectCharacter';
import SelectArtist from '../pages/Onboarding/SelectArtist';
import Welcome from '../pages/Onboarding/Welcome';
import CharacterDone from '../pages/Onboarding/CharactorDone';
import WelcomePopup from '../pages/Onboarding/WelcomePopup';

// Home
import Home from '../pages/Home/Home';
import Live from '../pages/Home/Live';
import PostDetail from '../pages/Home/PostDetail';
import Quiz from '../pages/Home/Quiz';
import Vote from '../pages/Home/Vote';

// Artist > Actor/Idol/Trot 구조 동일
import ArtistBoard from '../pages/Actor/Artist/ArtistBoard';
import ArtistPostDetail from '../pages/Actor/Artist/PostDetail';
import Gallery from '../pages/Actor/Artist/Gallery';
import Highlight from '../pages/Actor/Artist/Highlight';
import ArtistLive from '../pages/Actor/Artist/Live';
import ArtistVote from '../pages/Actor/Artist/Vote';
import ArtistInfoBoard from '../pages/Actor/Artist/InfoBoard';
import ArtistLetter from '../pages/Actor/Artist/Membership/ArtistLetter';
import Membership from '../pages/Actor/Artist/Membership/Membership';
import MembershipPost from '../pages/Actor/Artist/Membership/PostDetail';
import NoticeBoard from '../pages/Actor/Artist/Notice/InfoBoard';
import Notice from '../pages/Actor/Artist/Notice/Notice';

// Chat
import Chat from '../pages/Chat/Chat';
import ChatList from '../pages/Chat/ChatList';
import ChatRoom from '../pages/Chat/ChatRoom';

// Fashion
import Fashion from '../pages/Fashion/Fashion';

// MyPage
import MyPage from '../pages/MyPage/MyPage';
import Challenge from '../pages/MyPage/Challenge';
import Collection from '../pages/MyPage/Collection';
import Media from '../pages/MyPage/Media';
import Mission from '../pages/MyPage/Mission';
import Payment from '../pages/Payment'; // 아마도 MyPage 하위?

const AppRouter = () => {
  return (
    <Router>
      <Routes>

        {/* Onboarding */}
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/select-character" element={<SelectCharacter />} />
        <Route path="/select-artist" element={<SelectArtist />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/character-done" element={<CharacterDone />} />
        <Route path="/welcome-popup" element={<WelcomePopup />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/home/live" element={<Live />} />
        <Route path="/home/post" element={<PostDetail />} />
        <Route path="/home/quiz" element={<Quiz />} />
        <Route path="/home/vote" element={<Vote />} />

        {/* Artist (Actor 기준, Idol/Trot도 동일하게 설정) */}
        <Route path="/artist/board" element={<ArtistBoard />} />
        <Route path="/artist/post" element={<ArtistPostDetail />} />
        <Route path="/artist/gallery" element={<Gallery />} />
        <Route path="/artist/highlight" element={<Highlight />} />
        <Route path="/artist/highlight/live" element={<ArtistLive />} />
        <Route path="/artist/highlight/vote" element={<ArtistVote />} />
        <Route path="/artist/highlight/info" element={<ArtistInfoBoard />} />

        {/* Membership */}
        <Route path="/artist/membership/letter" element={<ArtistLetter />} />
        <Route path="/artist/membership" element={<Membership />} />
        <Route path="/artist/membership/post" element={<MembershipPost />} />

        {/* Notice */}
        <Route path="/artist/notice" element={<Notice />} />
        <Route path="/artist/notice/info" element={<NoticeBoard />} />

        {/* Chat */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/list" element={<ChatList />} />
        <Route path="/chat/room" element={<ChatRoom />} />

        {/* Fashion */}
        <Route path="/fashion" element={<Fashion />} />

        {/* MyPage */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/challenge" element={<Challenge />} />
        <Route path="/mypage/collection" element={<Collection />} />
        <Route path="/mypage/media" element={<Media />} />
        <Route path="/mypage/mission" element={<Mission />} />
        <Route path="/mypage/payment" element={<Payment />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
