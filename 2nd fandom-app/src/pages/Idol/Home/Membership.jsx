import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../components/BackButton';
import character from '../../../assets/Home/service-ch.png';
import check from '../../../assets/Home/check-icon.png';
import checkActive from '../../../assets/artist/check-active.png';
import confetti from 'canvas-confetti'; // ✅ 추가

import './Membership.css';
import '../../../index.css';

const Membership = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const toggleAgree = () => {
    setAgreed(!agreed);
  };

  const handleSubscribe = () => {
    if (agreed) {
      // 🎉 컨페티 팡!
      confetti({
        particleCount: 150,
        spread: 180,
        startVelocity: 40,
        gravity: 0.8,
        ticks: 200,
        origin: { x: 0.5, y: 0.7 },
        colors: ['#a0e7e5', '#b4f8c8', '#fbe7c6', '#ffaecc'],
        shapes: ['circle', 'square'],
      });

      // 1.5초 후 페이지 이동
      setTimeout(() => {
        navigate('/idol/artist/highlight', { state: { subscribed: true } });
      }, 1000);
    }
  };

  return (
    <div className="membership-wrap">
      <BackButton />

      <div className="membership-title">
        <div className="text">
          <div className="textbox">
            <h2>Nevie 멤버십<br />서비스 이용 안내</h2>
            <p>멤버십 월 구독료 <br />₩5,000 / 월</p>
          </div>
          <p className="img">
            <img src={character} alt="멤버십 이미지" />
          </p>
        </div>
      </div>

      <div className="note">
        <h3>유의사항</h3>
        <ul>
          <li>구독 기간 동안 아티스트의 메시지를 수신하고, <br />유료콘텐츠를 열람할 수 있으며 아티스트에게 <br />메시지를 보낼 수 있습니다.</li>
          <li><span>[결제/갱신]</span> 자동으로 정기 결제하는 상품입니다. <br /> 매월 정기 결제에 동의한 경우에만 결제가 가능합니다.</li>
          <li><span>[결제/갱신]</span> 결제 및 구독 정산은 Apple App Store 정책에 따라 관리되며, 상세 일정(또는 만료 예정일)은 다음 경로에서 확인할 수 있습니다.<br /> (앱 &gt; DM &gt; 이용권 관리)</li>
          <li><span>[해지]</span> 구독해지는 Apple App Store에서 가능하며 App Store 정책에 따라 해지/환불 처리됩니다. 해지 신청 후에는 구독 기간 만료일까지 서비스 이용이 유지되며, 구독 중인 이용권의 부분 환수/부분 환불은 불가합니다.</li>
        </ul>
      </div>

      <div
        className={`confirm ${agreed ? 'active' : ''}`}
        onClick={toggleAgree}
      >
        <img src={agreed ? checkActive : check} alt="체크아이콘" />
        <p>유의사항을 모두 확인하였으며,<br />매월 정기 구독에 동의합니다.</p>
      </div>

      <div className="btn-box">
        <button
          className={`subscribe-btn ${agreed ? 'active' : ''}`}
          disabled={!agreed}
          onClick={handleSubscribe}
        >
          구독하기
        </button>
      </div>
    </div>
  );
};

export default Membership;
