import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>MUJISHIN M</h1>
        <div className="text-light">Front-End Developer</div>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={me} alt="me" />
      </div>

      <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header