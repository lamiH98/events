import React from 'react'
import './_subscribed.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '../../Components/Utility/Button/Button'

const Subscribed: React.FC = () => {
  return (
    <div className="subscribed">
			<Container>
				<Row>
					<Col lg={6}>
						<div className="subscribed-content">
							<span>Don’t miss our future updates!</span>
							<h2 className='title'>Get subscribed today!</h2>
						</div>
					</Col>
					<Col lg={6}>
						<form action="" className="subscribed-form">
							<input type="email" placeholder="Get subscribed today!" />
							<Button title="Submit Now" />
						</form>
					</Col>
				</Row>
			</Container>
    </div>
  )
}

export default Subscribed
