import React from 'react'
import './_testimonials.scss'
import TitleSection from '../Utility/TitleSection/TitleSection'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Rating } from 'react-simple-star-rating'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { testimonials } from '../../data.js'

const Testimonials: React.FC = () => {
	
  return (
    <div className='testimonials'>
      <Container>
				<Row>
					<TitleSection title="Testimonial" subTitle="Why Our Customer Love Volia" />
					<Swiper className="mySwiper"
						breakpoints={{
							576: {
								slidesPerView: 2,
							},
							991: {
								slidesPerView: 3,
							},
						}}
					>
						{
							testimonials.map((testimonial, index) => (
								<SwiperSlide key={index} className="testimonials-section">
									<div className="content">
										<h5 className="title">{testimonial.mainTitle}</h5>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisci autem veritatis aut vitae. Pariatur quibusdam, eius corrupti sit tenetur vel ea laborum?</p>
									</div>
									<div className="info-testimonial d-flex align-items-center">
										<div className="info-image">
											<img src={testimonial.img} alt="" />
										</div>
										<div className="info-content">
											<Rating initialValue={testimonial.rating} allowFraction={true} size={22} />
											<h5 className="name">{testimonial.name}</h5>
											<span className="job">{testimonial.job}</span>
										</div>
									</div>
								</SwiperSlide>
							))
						}
					</Swiper>
				</Row>
			</Container>
    </div>
  )
}

export default Testimonials
