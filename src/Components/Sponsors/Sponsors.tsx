import React from 'react'
import './_sponsors.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../Utility/TitleSection/TitleSection'
import Button from '../Utility/Button/Button'
import { sponsors } from '../../data.js'

const Sponsors: React.FC = () => {
  return (
    <div className="sponsors">
		<Container>
			<Row>
				<Col lg={3}>
					<div className="sponsors-content">
						<TitleSection title="Clients" subTitle="Our Official Sponsors" center={false} />
						<p className="details">We have dedicated tracks for every industry Whether you want to hire tech’s top talent.</p>
						<Button title="Buy Ticket" backgroundColor='#001376' />
					</div>
				</Col>
				<Col lg={9}>
					<Row>
						{
							sponsors.map((sponsor, index) => (
								<Col md={4} sm={6} key={index}>
									<figure className="sponsor-img">
										<img src={sponsor} alt="" />
									</figure>
								</Col>
							))
						}
					</Row>
				</Col>
			</Row>
		</Container>
    </div>
  )
}

export default Sponsors
