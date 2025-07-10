import React from 'react';
import MyPageSection from './MyPageSection';
import LiveSection from './LiveSection';
import QuizSection from './QuizSection';
import VoteSection from './VoteSection';
import ChartSection from './ChartSection';
import AdSection from './AdSection';
import YoutubeSection from './YoutubeSection';
import './HomeLayout.css';

const HomeLayout = ({ children }) => {
  return (
    <div className="home-page">
      <MyPageSection />
      <LiveSection />
      <YoutubeSection />
      <QuizSection />
      <VoteSection />
      <ChartSection />
      <AdSection />
      {children}
    </div>
  );
};

export default HomeLayout;
