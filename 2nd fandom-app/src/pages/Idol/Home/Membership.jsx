import React from 'react'
import BackButton from '../../../components/BackButton'
import membershipImg from '../../../assets/Manual/idol-mypage-char.png';


const Membership = () => {
  return (
    <div>
      <BackButton/>
      <div className="title">
        <div className="text">
        <h2>뉴비 멤버십 서비스 <br />이용 안내</h2>
        <p>멤버십 월 구독료 <br />5,000₩ / 월</p>
        <p className="img"><img src={membershipImg} alt="" /></p>
        </div>
      </div>
    </div>
  )
}

export default Membership
