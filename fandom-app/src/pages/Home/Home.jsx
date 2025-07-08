import React from 'react'
import Section from '../../components/Section';

const Home = () => {
  return (
    <div>
      <Section title="마이페이지" to="/mypage" />
      <Section title="아티스트 페이지" to="/artist" />
      <Section title="아티스트 페이지" to="/artist" />
      <Section title="퀴즈 풀기" to="/quiz" />
      <Section title="투표 참여하기" to="/vote" />
      <Section title="인기차트" to="/fashion" />
    </div>
  );
};

export default Home
