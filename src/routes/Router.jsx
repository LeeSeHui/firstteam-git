import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// components
import Nav from '../components/Nav';
import Chatbot from '../components/Chatbot';
import Attendance from '../components/Attendance';


// Onboarding
import Splash from '../pages/Onboarding/Splash';
import Login from '../pages/Onboarding/Login';
import Manual from '../pages/Onboarding/Manual';
import SelectCharacter from '../pages/Onboarding/SelectCharacter';
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
import IdolMission from '../pages/Idol/MyPage/Mission';
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




// Actor
import ActorHome from '../pages/Actor/Home/Home';
import ActorLive from '../pages/Actor/Home/Live';
import ActorPostDetail from '../pages/Actor/Home/PostDetail';
import ActorQuiz from '../pages/Actor/Home/Quiz';
import ActorVote from '../pages/Actor/Home/Vote';

// Trot
import TrotHome from '../pages/Trot/Home/Home';
import TrotLive from '../pages/Trot/Home/Live';
import TrotPostDetail from '../pages/Trot/Home/PostDetail';
import TrotQuiz from '../pages/Trot/Home/Quiz';
import TrotVote from '../pages/Trot/Home/Vote';

const AppRouterContent = () => {
  const location = useLocation();

  // Nav & Chatbot 숨길 경로
  const hideNavPaths = [
    '/splash',
    '/onboarding/login',
    '/manual',
    '/select-character',
    '/select-artist',
    '/welcome',
  ];

  const shouldHideNav = hideNavPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNav && <Nav />}
      {!shouldHideNav && <Chatbot />}

      <Routes>
        {/* Components */}
        <Route path="/splash" element={<Splash />} />
        <Route path="/attendance" element={<Attendance />} />

        {/* Onboarding */}
        <Route path="/onboarding/login" element={<Login />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/select-character" element={<SelectCharacter />} />
        <Route path="/onboarding/select-artist" element={<SelectArtist />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Idol */}
        <Route path="/idol/home" element={<IdolHome />} />
        <Route path="/idol/home/alarm" element={<IdolAlarm />} />
        <Route path="/idol/home/live" element={<IdolLive />} />
        <Route path="/idol/home/post" element={<IdolPostDetail />} />
        <Route path="/idol/home/quiz" element={<IdolQuiz />} />
        <Route path="/idol/home/vote" element={<IdolVote />} />
        <Route path="/idol/mypage" element={<IdolMyPage />} />
        <Route path="/idol/home/membership" element={<IdolMembership />} />

        <Route path="/idol/mypage/mission" element={<IdolMission />} />
        <Route path="/idol/mypage/collection" element={<IdolCollection />} />
        <Route path="/idol/mypage/challenge" element={<IdolChallenge />} />
        <Route path="/idol/mypage/media" element={<IdolMedia />} />
        <Route path="/idol/mypage/payment" element={<IdolPayment />} />

        <Route path="/idol/artist" element={<IdolArtistLayout />}>
          <Route path="/idol/artist/highlight" element={<IdolHighlight />} />
          <Route path="/idol/artist/artist-board" element={<IdolBoard />} />
          <Route path="/idol/artist/artist-gallery" element={<IdolGallery />} />
          <Route path="/idol/artist/artist-membership" element={<IdolMembership2 />} />
          <Route path="/idol/artist/artist-notice" element={<IdolNotice />} />
        </Route>
        

        {/* Actor */}
        <Route path="/actor/home" element={<ActorHome />} />
        <Route path="/actor/home/live" element={<ActorLive />} />
        <Route path="/actor/home/post" element={<ActorPostDetail />} />
        <Route path="/actor/home/quiz" element={<ActorQuiz />} />
        <Route path="/actor/home/vote" element={<ActorVote />} />

        {/* Trot */}
        <Route path="/trot/home" element={<TrotHome />} />
        <Route path="/trot/home/live" element={<TrotLive />} />
        <Route path="/trot/home/post" element={<TrotPostDetail />} />
        <Route path="/trot/home/quiz" element={<TrotQuiz />} />
        <Route path="/trot/home/vote" element={<TrotVote />} />

        {/* 기본 리디렉트 */}
        <Route path="/" element={<Navigate to="/splash" replace />} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AppRouterContent />
    </Router>
  );
};

export default AppRouter;
