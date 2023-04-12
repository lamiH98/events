import React from 'react'
import GetTicket from '../../Components/GetTicket/GetTicket'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../../Components/Utility/TitleSection/TitleSection'
import TeamSingle from '../../Components/TeamSingle/TeamSingle'
import { speakers } from '../../data'

const Speakers: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Speakers" />
			<div className="team">
				<TitleSection title="Speakers" subTitle="World Class Speakers" />
				<Container>
					<Row>
						{
							speakers.map((speaker, index) => (
								<Col lg={3} md={4} xs={6} key={index}>
									<TeamSingle speaker={speaker} />
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

export default Speakers
