import React from 'react'
import './_welcome.scss'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TitleSection from '../../../../Components/Utility/TitleSection/TitleSection'
import welcomeImg1 from '../../../../assets/images/welcome/welcome-1.jpg'
import welcomeImg2 from '../../../../assets/images/welcome/welcome-2.jpg'
import welcomeImg3 from '../../../../assets/images/welcome/welcome-3.png'
import Button from '../../../../Components/Utility/Button/Button'

const Welcome: React.FC = () => {
  return (
    <div className='welcome'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className="welcome-images d-lg-flex d-none">
							<div className="img">
								<img src={welcomeImg1} alt="" />
							</div>
							<div className="img-2">
								<img src={welcomeImg2} alt="" />
							</div>
							<div className="bg-img">
								<img className='' src={welcomeImg3} alt="" />
							</div>
						</div>
					</Col>
					<Col lg={6}>
    				<TitleSection title="WELCOME TO VOLIA" subTitle="Volia Leading Tech Festival In-person And Digital" center={false} />
						<div className="welcome-content">
							<p>With our in-person tech festival AND our online networking tools, you'll be able to attend in Amsterdam and from across the globe.</p>
							<p>Rub shoulders with international technology executives, top-tier investors, policymakers, startups, and scale-ups, during two days of business, knowledge sharing and a whole lot of fun.</p>
						</div>
						<Button title="Book Ticket" backgroundColor="#001376" />
					</Col>
				</Row>
			</Container>
    </div>
  )
}

export default Welcome
