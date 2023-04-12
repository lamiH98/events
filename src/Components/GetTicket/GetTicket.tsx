import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '../Utility/Button/Button'
import Img1 from '../../assets/images/getTicket/get-ticket-2.png'
import './_getTicket.scss'

const GetTicket: React.FC = () => {
  return (
    <div className="get-ticket text-center">
			<Row>
				<Col>
					<div className="ticket-images">
						<img className='img-left' src={Img1} alt="" />
						<img className='img-right' src={Img1} alt="" />
					</div>
					<h2 className="title">Get Ticket Now!</h2>
					<p>Experience the conference wherever you are. Register now for online access. Tune in live for the keynotes and watch sessions on demand. Also be sure to join our event</p>
					<Button title="Book Ticket" backgroundColor='#ff6c00 ' />
				</Col>
			</Row>
    </div>
  )
}

export default GetTicket
