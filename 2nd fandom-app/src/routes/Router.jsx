import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// components
import Nav from '../components/Nav';
import Chatbot from '../components/Chatbot';
import Attendance from '../pages/Attendance';
import ScrollToTop from '../components/ScrollToTop';

// Onboarding
import Splash from '../pages/Onboarding/Splash';
import Story from '../pages/Onboarding/Story';
import Login from '../pages/Onboarding/Login';
import Manual from '../pages/Onboarding/Manual';
import Nickname from '../pages/Onboarding/Nickname';
import SelectArtist from '../pages/Onboarding/SelectArtist';
import Welcome from '../pages/Onboarding/Welcome';

// Idol
import IdolAlarm from '../pages/Idol/Home/Alarm';
import IdolHome from '../pages/Idol/Home/Home';
import IdolLive from '../pages/Idol/Home/Live';
import IdolPostDetail from '../pages/Idol/Home/PostDetail';
import IdolQuiz from '../pages/Idol/Home/Quiz';
import IdolVote from '../pages/Idol/Home/Vote';
import IdolMyPage from '../pages/Idol/MyPage/MyPage';
import IdolMembership from '../pages/Idol/Home/Membership';

// idol-mypage
import IdolCollection from '../pages/Idol/MyPage/Collection';
import IdolChallenge from '../pages/Idol/MyPage/Challenge';
import IdolMedia from '../pages/Idol/MyPage/Media';
import IdolPayment from '../pages/Idol/MyPage/Payment';

// idol-artist
import IdolArtistLayout from '../pages/Idol/Artist/Layout/ArtistLayout';
import IdolHighlight from '../pages/Idol/Artist/Hightlight/Highlight';
import IdolBoard from '../pages/Idol/Artist/ArtistBoard/ArtistBoard';
import IdolGallery from '../pages/Idol/Artist/Gallery/Gallery';
import IdolMembership2 from '../pages/Idol/Artist/Membership/Membership';
import IdolNotice from '../pages/Idol/Artist/Notice/Notice';

// idol-chat
import IdolChat from '../pages/Idol/Chat/Chat';
import IdolChatRoom from '../pages/Idol/Chat/ChatRoom';

// fashion
import Fashion from '../pages/Idol/Fashion/Fashion';
import FashionAll from '../pages/Idol/Fashion/FashionAll';
import Makeup from '../pages/Idol/Fashion/Makeup';
import Airport from '../pages/Idol/Fashion/Airport';
import Daily from '../pages/Idol/Fashion/Daily';
import Sports from '../pages/Idol/Fashion/Sports';

// Actor
import ActorHome from '../pages/Actor/Home/Home';
import ActorMypage from '../pages/Actor/MyPage/MyPage';

// Trot
import TrotHome from '../pages/Trot/Home/Home';
import TrotMypage from '../pages/Trot/MyPage/MyPage';

const AppRouterContent = () => {
  const location = useLocation();

  // Nav & Chatbot 숨길 경로
  const hideNavPaths = [
    '/splash',
    '/onboarding/login',
    '/manual',
    '/nickname',
    '/onboarding/select-artist',
    '/welcome',
    '/idol/home/quiz',
    '/chatroom',
    '/story',
    

  ];

  const shouldHideNav = hideNavPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNav && <Nav />}
      {!shouldHideNav && <Chatbot />}

      <Routes>
        {/* 기본 리디렉트 */}
        <Route index element={<Navigate to="/splash" replace />} />

        {/* Components */}
        <Route path="/splash" element={<Splash />} />
        <Route path="/story" element={<Story />} />
        <Route path="/attendance" element={<Attendance />} />

        {/* Onboarding */}
        <Route path="/onboarding/login" element={<Login />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/onboarding/select-artist" element={<SelectArtist />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Idol */}
        <Route path="/idol/home" element={<IdolHome />} />
        <Route path="/idol/home/alarm" element={<IdolAlarm />} />
        <Route path="/idol/home/live" element={<IdolLive />} />
        <Route path="/idol/home/post" element={<IdolPostDetail />} />
        <Route path="/idol/home/quiz" element={<IdolQuiz />} />
        <Route path="/idol/home/vote" element={<IdolVote />} />
        <Route path="/idol/home/membership" element={<IdolMembership />} />
        <Route path="/idol/home/notice" element={<IdolNotice />} />
        <Route path="/idol/mypage" element={<IdolMyPage />} />
        <Route path="/idol/mypage/collection" element={<IdolCollection />} />
        <Route path="/idol/mypage/challenge" element={<IdolChallenge />} />
        <Route path="/idol/mypage/media" element={<IdolMedia />} />
        <Route path="/idol/mypage/payment" element={<IdolPayment />} />

        {/* 중첩 라우팅: Artist */}
        <Route path="/idol/artist" element={<IdolArtistLayout />}>
          <Route path="highlight" element={<IdolHighlight />} />
          <Route path="artist-board" element={<IdolBoard />} />
          <Route path="artist-gallery" element={<IdolGallery />} />
          <Route path="artist-membership" element={<IdolMembership2 />} />
          <Route path="artist-notice" element={<IdolNotice />} />
        </Route>

        {/* 중첩 라우팅: Fashion */}
        <Route path="/idol/fashion" element={<Fashion />}>
          <Route path="all" element={<FashionAll />} />
          <Route path="makeup" element={<Makeup />} />
          <Route path="airport" element={<Airport />} />
          <Route path="daily" element={<Daily />} />
          <Route path="sports" element={<Sports />} />
        </Route>

        {/* Chat */}
        <Route path="/idol/chat" element={<IdolChat />} />
        <Route path="/chatroom/:name" element={<IdolChatRoom />} />

        {/* Actor */}
        <Route path="/actor/home" element={<ActorHome />} />
        <Route path="/actor/mypage" element={<ActorMypage />} />

        {/* Trot */}
        <Route path="/trot/home" element={<TrotHome />} />
        <Route path="/trot/mypage" element={<TrotMypage />} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <AppRouterContent />
    </>
  );
};

export default AppRouter;
