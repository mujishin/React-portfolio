import React from 'react'
import './about.css'
import ME from '../../assets/me-img.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'

 const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about-card">
              <AiOutlineUsergroupAdd className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>32+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae similique, hic nisi, consequuntur fuga blanditiis, illo maiores corporis ipsum distinctio quod dignissimos nesciunt saepe numquam ipsam cum in? Porro!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about