import React from 'react'
import './_features.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../Utility/TitleSection/TitleSection'
import { Link } from 'react-router-dom'
import { features } from '../../data.js'

const Features: React.FC = () => {
  return (
    <div className="features">
      <Container>
				<Row>
					<TitleSection title="Our Features" subTitle='Features For Our Client For Your Event' />
					{
						features.map((feature, index) => (
							<Col sm={6} lg={3} key={index}>
								<div className="feature-single">
									<div className="feature-img">
										<img src={feature.img} alt="" />
									</div>
									<div className="feature-content">
										<h5>{feature.title}</h5>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, obcaecati!</p>
										<h6><Link to='/'>Read More</Link></h6>
									</div>
								</div>
							</Col>
						))
					}
				</Row>
			</Container>
    </div>
  )
}

export default Features
