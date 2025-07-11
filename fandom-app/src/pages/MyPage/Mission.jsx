import React from 'react'
import BackButton from '../../components/Backbutton'
import mission from '../../assets/mission.png'

const Mission = () => {
  return (
    <div>
        <BackButton />
      <h2>미션하기</h2>
      <img src={mission} alt="payment" style={{ width: '100%', maxWidth: '480px', marginTop: '20px' }} />
    </div>
  )
}

export default Mission
