import React from 'react'
import './_counter.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { counters } from '../../data.js'

const Counter: React.FC = () => {
  return (
    <div className="counter">
			<Container>
				<Row>
					{
						counters.map((counter, index) => (
							<Col sm={6} lg={3} key={index}>
								<div className="counter-single d-flex align-items-center gap-2">
									<div className="counter-num">
										<img src={counter.img} alt="" />
										<span className='num'>{counter.num}</span>
									</div>
									<p>{counter.title}</p>
								</div>
							</Col>
						))
					}
				</Row>
			</Container>
    </div>
  )
}

export default Counter