import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { testimonials } from '../../data.js'
import { Rating } from 'react-simple-star-rating'
import '../../Components/Testimonials/_testimonials.scss'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb.js'

const TestimonialsPage: React.FC = () => {
  return (
		<>
			<Breadcrumb title="Testimonials" />
			<Container>
				<Row>
					{
						testimonials.map((testimonial, index) => (
							<Col lg={4} md={6} key={index}>
								<div className="testimonials-section" style={{ marginTop: "3rem" }}>
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
								</div>
							</Col>
						))
					}
				</Row>
			</Container>
		</>
  )
}

export default TestimonialsPage
