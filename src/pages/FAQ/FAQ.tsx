import React from 'react'
import './_faq.scss'
import Accordion from 'react-bootstrap/Accordion';
import TitleSection from '../../Components/Utility/TitleSection/TitleSection';
import Container from 'react-bootstrap/Container';
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { faqs } from '../../data.js'
import Col from 'react-bootstrap/Col';

const FAQ: React.FC = () => {
  return (
		<>
			<Breadcrumb title="FAQ’s" />
			<section className="faq">
				<Container> 
					<TitleSection title="Some FAQ’s" subTitle="General Questions" />
						<Accordion defaultActiveKey="0">
							<div className="row">
								{
									faqs.map(item => (
										<Col md={6} key={item.id}>
											<Accordion.Item eventKey={`${item.id}`}>
												<Accordion.Header>{item.title}</Accordion.Header>
													<Accordion.Body>Learning Lab registrations will also be rolled over to 2023 conference. The learning lab workshop schedule will be revised for 2023, and we will announce the new schedule when it is available.</Accordion.Body>
											</Accordion.Item>
										</Col>
									))
								}
							</div>
					</Accordion>
				</Container>
			</section>
		</>
  )
}

export default FAQ
