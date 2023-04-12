import React from 'react'
import './_team.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../../../../Components/Utility/TitleSection/TitleSection'
import TeamSingle from '../../../../Components/TeamSingle/TeamSingle'
import { speakers } from '../../../../data.js'

const Team: React.FC = () => {
  return (
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
  )
}

export default Team
