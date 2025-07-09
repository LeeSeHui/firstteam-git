import React from 'react'
import BackButton from '../../components/Backbutton'
import mainLiveImg from '../../assets/live.png'

const Live = () => {
  return (
    <div>
    <BackButton/>
    <h2>라이브 페이지</h2>
    <img src={mainLiveImg} alt="" />
    </div>
  )
}

export default Live
