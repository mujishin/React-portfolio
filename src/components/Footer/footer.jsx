import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
    <a href="#" className="footer-logo">MUJISHIN</a>

    <ul className="footerlinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfoilo</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer-socials">
      <a href="https://facebook.com"></a>
      <a href="https://instagram.com"></a>
      <a href="https://twitter.com"></a>
    </div>

    <div className="footer-copyright">
      <small>&copy; McAUSTIN DESIGNZ All Rights Reserved. </small>
    </div>
    </footer>
  )
}

export default footer