import React from 'react'
import logo from '../../../assets/Home/logo.png';
import alarm from '../../../assets/Home/alarm.png';
import './Home.css'

const Home = () => {
  return (
    <div>
      <header>
        <p className="img"><img src={logo} alt="" /></p>
        <p className="img"><img src={alarm} alt="" /></p>
      </header>
      <h2>dkss</h2>
    </div>
  )
}

export default Home
