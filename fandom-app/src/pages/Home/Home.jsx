import React from 'react'
import MyPageSection from './MyPageSection';
import LiveSection from './LiveSection';
import QuizSection from './QuizSection';
import Section from '../../components/Section';
import AdSection from './AdSection';
import ArtistSection from './ArtistSection';
import VoteSection from './VoteSection';
import ChartSection from './ChartSection';


const Home = ({ selectedArtists }) => {
  return (
    <div>
      <MyPageSection selectedArtists={selectedArtists} />
      <LiveSection />
      <ArtistSection />
      <QuizSection />
      <VoteSection/>
      <ChartSection/>
      <AdSection/>
      <p>박종민</p>
    </div>
  );
};

export default Home
