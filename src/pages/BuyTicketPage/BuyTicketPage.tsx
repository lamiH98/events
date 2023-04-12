import React from 'react'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { prices } from '../../data.js'
import PriceSingle from '../../Components/PriceSingle/PriceSingle.js'
import GetTicket from '../../Components/GetTicket/GetTicket.js'
import TitleSection from '../../Components/Utility/TitleSection/TitleSection.js'

const BuyTicketPage: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Price Plan" />
			<div className="price">
				<Container>
					<TitleSection title='GET TICKET' subTitle='Explore Flexible Pricing Plans Choose a Ticket' />
					<Row>
						{
							prices.map((price, index) => (
								<Col md={6} lg={4} key={index}>
									<PriceSingle price={price} />
								</Col>
							))
						}
					</Row>
				</Container>
			</div>
			<GetTicket />
    </>
  )
}

export default BuyTicketPage
