import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../components/BackButton';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <BackButton/>
      <h2>마이페이지</h2>
      <button onClick={() => navigate('/idol/mypage/mission')}>미션 하기</button>
      <button onClick={() => navigate('/idol/mypage/collection')}>나의 컬렉션</button>
      <button onClick={() => navigate('/idol/home/vote')}>투표하세요!</button>
      <button onClick={() => navigate('/idol/mypage/media')}>최근 본 미디어</button>
      <button onClick={() => navigate('/idol/mypage/payment')}>결제내역(멤버십관리)</button>
    </div>
  );
};

export default MyPage;
