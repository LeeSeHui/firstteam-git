import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../components/BackButton';

const Challenge = () => {
   const navigate = useNavigate();

  return (
    <div>
      <BackButton />
      <h2>챌린지 페이지</h2>
      <button onClick={() => navigate('/idol/home/quiz')}>오늘의 퀴즈 풀기</button>
      <button>광고 보러 가기(누르면 바로 광고, 페이지 이동x)</button>
      <button onClick={() => navigate('/attendance')}>출석체크 하러가기</button>
    </div>
  )
}

export default Challenge
