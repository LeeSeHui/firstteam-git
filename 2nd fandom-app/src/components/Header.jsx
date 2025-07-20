import React from 'react'
import head1 from '../assets/head1.png'
import head2 from '../assets/head2.png'
import './Header.css'

const Header = () => {
  return (
    <div>
     <header>
        <p className="img"><img src={head1} alt="" /></p>
        <p className="img"><img src={head2} alt="" /></p>
     </header>
    </div>
  )
}

export default Header
