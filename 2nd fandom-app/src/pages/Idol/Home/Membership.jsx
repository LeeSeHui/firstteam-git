import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import BackButton from '../../../components/BackButton';
import character from '../../../assets/home/service-ch.png';
import check from '../../../assets/home/check-icon.png';
import checkActive from '../../../assets/artist/check-active.png';

import './Membership.css';
import '../../../index.css';


const Membership = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate(); // ✅ 추가

  const toggleAgree = () => {
    setAgreed(!agreed);
  };

  const handleSubscribe = () => {
    if (agreed) {
      navigate('/idol/artist/highlight');
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
          <li>구독 기간 동안 아티스트의 메시지를 수신하고, 유료콘텐츠를 열람할 수 있으며 아티스트에게 메시지를 보낼 수 있습니다.</li>
          <li>[결제/갱신] 자동으로 정기 결제하는 상품입니다. <br /> 매월 정기 결제에 동의한 경우에만 결제가 가능합니다.</li>
          <li>[결제/갱신] 결제 및 구독 정산은 Apple App Store 정책에 따라 관리되며, 상세 일정(또는 만료 예정일)은 다음 경로에서 확인할 수 있습니다. (앱 &gt; DM &gt; 이용권 관리)</li>
          <li>[해지] 구독해지는 Apple App Store에서 가능하며 App Store 정책에 따라 해지/환불 처리됩니다. 해지 신청 후에는 구독 기간 만료일까지 서비스 이용이 유지되며, 구독 중인 <br />이용권의 부분 환수/부분 환불은 불가합니다.</li>
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
          onClick={handleSubscribe} // ✅ 클릭 시 이동
        >
          구독하기
        </button>
      </div>
    </div>
  );
};

export default Membership;
