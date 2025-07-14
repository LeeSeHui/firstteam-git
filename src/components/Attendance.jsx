import React from 'react'
import BackButton from './BackButton'

const Attendance = () => {
  return (
    <div>
      <BackButton/>
      <h2>출석체크</h2>
      <button className="point">
        <p>포인트 더 받기</p>
      </button>
    </div>
  )
}

export default Attendance
