import React from 'react'
import './_price.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../../../../Components/Utility/TitleSection/TitleSection'
import PriceSingle from '../../../../Components/PriceSingle/PriceSingle'
import { prices } from '../../../../data.js'

const Price: React.FC = () => {
  return (
    <div className='price'>
			<TitleSection title='GET TICKET' subTitle='Explore Flexible Pricing Plans Choose a Ticket' />
      <Container>
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
  )
}

export default Price
