import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ebxt7au', 'template_n4fwxk6', form.current, '6WQFO8fGyqBoMRLZf')
     e.target.reset()
  };

  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="contact__options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>aswinash404@gmail.com</h5>
            <a href="mailto:aswinash404@gmail.com">Send a Message</a>
          </article>
          <article className="contact-option">
          <RiMessengerLine className='contact-icon'/>
            <h4>Messenger</h4>
            <h5>McAustin MAC</h5>
            <a href="https://m.me/mujimacaustin.mujimacaustin">Send a Message</a>
          </article>
          <article className="contact-option">
          <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8870666150</h5>
            <a href="https://api.whatsapp.com/send?phone+91 887066150">Send a Message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Message' rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact