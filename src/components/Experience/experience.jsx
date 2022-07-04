import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'

export const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="frontend">
          <h3>Front-End Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <AiFillHtml5 className='details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <DiCss3 className='details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <DiJavascript className='details-icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaBootstrap className='details-icon'/>
              <div>
              <h4>BOOSTRAP</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaReact className='details-icon'/>
              <div>
              <h4>REACT JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
    
      <div className="backend">
      <h3>back-End Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <AiFillHtml5 className='details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <DiCss3 className='details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <DiJavascript className='details-icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaBootstrap className='details-icon'/>
              <div>
              <h4>BOOSTRAP</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <FaReact className='details-icon' />
              <div>
              <h4>REACT JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
      </div>
      </div>
    </section>
  )
}

export default experience