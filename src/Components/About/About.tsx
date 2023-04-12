import React from 'react'
import './_about.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../Utility/TitleSection/TitleSection'
import aboutImg1 from '../../assets/images/about/about-img-3.jpg'
import Button from '../Utility/Button/Button'
import { aboutCounter } from '../../data.js'

const About: React.FC = () => {
  return (
    <div className='about'>
			<Container>
				<Row>
					<Col lg={7}>
						<TitleSection title="Get the latest info about" subTitle="Conference For Solving Problems For Your Business" center={false} />
						<p className="about-details">Influential media, entertainment & technology show inspirational speakers including game changing not just a large-scale conference, but a large educational hub on digital technologies for business, where people communicate, get inspired and find ready-made.</p>
					</Col>
					<Col lg={5}>
						<div className="date-boxes d-flex">
							<div className="box-one">
								<h4 className="number">18</h4>
								<span className="subTitle">December</span>
								<h6 className="title">Exhibition and Side Events</h6>
							</div>
							<div className="box-tow">
								<h4 className="number">09</h4>
								<span className="subTitle">October</span>
								<h6 className="title">Conferance Day Now</h6>
							</div>
						</div>
					</Col>
				</Row>
				<div className="about-counter">
					<Row>
						{
							aboutCounter.map((counter, index) => (
								<Col md={3} xs={6} key={index}>
									<div className={`about-counter-single ${aboutCounter.length - 1 === index ? 'last-one' : ''}`}>
										<span className="number">{counter.number}</span>
										<h6 className="title">{counter.title}</h6>
									</div>
								</Col>
							))
						}
					</Row>
				</div>
				<div className="about-video">
					<Row>
						<Col lg={5}>
							<div className="about-video-box">
								<h3 className="title">Mind Blowing Was Last Year 2020</h3>
								<p>We have dedicated tracks for every industry Whether you want to hire tech’s top talent meet with the policymakers.</p>
								<Button title="Book Ticket" />
							</div>
						</Col>
						<Col lg={7}>
							<div className="about-video-img">
								<img src={aboutImg1} alt="" />
							</div>
						</Col>
					</Row>
				</div>
			</Container>
    </div>
  )
}

export default About
