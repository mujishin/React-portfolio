import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name : 'Tina George',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta corporis deserunt ullam recusandae atque fugit repudiandae, inventore quaerat itaque, laboriosam nobis. Nulla error officiis qui aut enim architecto pariatur'
  },
  {
    avatar: AVTR2,
    name : 'Tina George',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta corporis deserunt ullam recusandae atque fugit repudiandae, inventore quaerat itaque, laboriosam nobis. Nulla error officiis qui aut enim architecto pariatur'
  },
  {
    avatar: AVTR3,
    name : 'Tina George',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta corporis deserunt ullam recusandae atque fugit repudiandae, inventore quaerat itaque, laboriosam nobis. Nulla error officiis qui aut enim architecto pariatur'
  },
  {
    avatar: AVTR4,
    name : 'Tina George',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta corporis deserunt ullam recusandae atque fugit repudiandae, inventore quaerat itaque, laboriosam nobis. Nulla error officiis qui aut enim architecto pariatur'
  },
]





const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>review from clients</h5>
      <h2>testimonials</h2>

  <Swiper className="container testimonials__container"
  // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
    {
      data.map(({avatar, name, review}, index) =>{
      return(
        <SwiperSlide key={index} className="testimonial">
         <div className="client-avatar">
          <img src={avatar} alt="" />
          </div>
          <h5 className="client-name">{name}</h5>
          <small className="client-review">{review}</small>
        </SwiperSlide>
            )
          })
         }
      </Swiper>
    </section>
  )
}

export default testimonials