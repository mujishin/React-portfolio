import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>what i offer </h5>
      <h2>services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Desgin</h3>
          </div>

          <ul className="service-list">
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service-head">
            <h3>Web Developments</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service-head">
            <h3>Graphic Desgin</h3>
          </div>

          <ul className="service-list">
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
            <li>
            <BiCheck className='service-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur  elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHIC DESGIN */}
      </div>
    </section>
  )
}

export default services