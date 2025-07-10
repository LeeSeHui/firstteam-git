import React from 'react';
import { useNavigate } from 'react-router-dom';

const MembershipInfo = () => {
  const navigate = useNavigate();

  const handleJoin = () => {
    // 실제 가입 로직 (API 연동 등) 여기 넣을 수 있음
    alert("가입이 완료되었습니다!");
    navigate('/mypage'); // 가입 후 마이페이지 등으로 이동
  };

  return (
    <div className="membership-info">
      <h1>멤버십 안내</h1>
      <p>멤버십에 가입하시면 다양한 혜택을 누릴 수 있습니다.</p>
      <ul>
        <li>콘텐츠 선공개</li>
        <li>팬미팅 우선권</li>
        <li>한정 굿즈</li>
        <li>커뮤니티 특별 권한</li>
      </ul>
      <h3>이용 약관</h3>
      <p>여기에 이용 약관 텍스트 쭉 작성...</p>

      <button onClick={handleJoin}>멤버십 가입하기</button>
    </div>
  );
};

export default MembershipInfo;