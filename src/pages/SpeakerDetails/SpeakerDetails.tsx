import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { speakers } from '../../data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './_speakerDetails.scss'
import GetTicket from '../../Components/GetTicket/GetTicket';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const speakerDetails: React.FC = () => {

	const { slug } = useParams();
  const speaker = speakers.find((speaker) => speaker.slug === slug);

	const speakerSessions = [
		{ id: 1, title: "Day 1", time: "12.00 am - 01.00 pm", place: "5 Universal Principles of Company Growth" },
		{ id: 2, title: "Day 2", time: "01.00 am - 02.00 pm", place: "7 Key Business Owner Functions" },
		{ id: 3, title: "Day 3", time: "02.00 pm - 03.00 pm", place: "Place: Our Best Mistakes in Business" },
	]

  return (
    <>
			<Breadcrumb title={speaker!.name} />
			<div className="speaker-details">
				<Container>
					<Row>
						<Col md={6} lg={3}>
							<div className="speaker-img text-center">
								<img src={speaker?.img} style={{ borderColor: speaker?.color }} alt="" />
								<div className="img-content">
									<h4 className='name'>{speaker?.name}</h4>
									<h6 className="job">{speaker?.job}</h6>
									<div className="social-links">
										<span className="icon">
											<FaFacebookF />
										</span>
										<span className="icon">
											<FaTwitter />
										</span>
										<span className="icon">
											<FaInstagram />
										</span>
									</div>
								</div>
							</div>
						</Col>
						<Col md={6} lg={4}>
							<ul className='speaker-info list-unstyled'>
								<li>
									<span>Speciality:</span>
									<span>Netflix</span>
								</li>
								<li>
									<span>Company:</span>
									<span>10 Years</span>
								</li>
								<li>
									<span>Experience:</span>
									<span>angelina888@mail.com</span>
								</li>
								<li>
									<span>Email:</span>
									<span>700.123.456.789</span>
								</li>
								<li>
									<span>Phone:</span>
									<span>700.123.456.789</span>
								</li>
								<li>
									<span>Fax:</span>
									<span>Product Designer</span>
								</li>
							</ul>
						</Col>
						<Col md={12} lg={5}>
							<div className="speaker-content">
								<h2 className="title">Personal Information</h2>
								<p>Anna assumed the role of Chief Product Officer in July 2017 and leads the product team, which designs, builds and optimizes the Netflix experience. Previously, Anna was International Development Officer for Netflix, responsible for the global partnerships with consumer electronics.</p>
								<p>Prior to joining Netflix in 2008, Anna was senior vice president of consumer electronics products for Macrovision Solutions Corp. (later renamed to Rovi Corporation) and previously held positions at digital entertainment software provider, Mediabolic Inc., Red Hat Network, the provider of Linux and Open Source technology, and online vendor Wine.</p>
							</div>
						</Col>
					</Row>
					<Row>
						<div className="speaker-session">
							<h2 className="title">Speeches by Anna Harrison</h2>
							<Row>
								{
									speakerSessions.map(speakerSession => (
										<Col md={6} lg={4} key={speakerSession.id}>
											<div className="speaker-session-info">
												<h3 className="day">[{speakerSession.title}]</h3>
												<div className="time">{speakerSession.time}</div>
												<div className="place">
													<span>Place: </span>
													{speakerSession.place}
												</div>
											</div>
										</Col>
									))
								}
							</Row>
						</div>
					</Row>
				</Container>
			</div>
			<GetTicket />
		</>
  )
}

export default speakerDetails
