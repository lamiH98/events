import React from 'react'
import GetTicket from '../../Components/GetTicket/GetTicket'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../../Components/Utility/TitleSection/TitleSection'
import { galleryImages } from '../../data'
import logo from '../../assets/images/logo.png'

const GalleryPage: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Gallery" />
			<Container>
				<div className="gallery">
					<Row>
						<TitleSection title="Photo Gallery" subTitle="Have A Look On" />
					</Row>
					<Row>
						{
							galleryImages.map((img, index) => (
								<Col md={6} sm={6} key={index}>
									<div className="img-box">
										<img src={img} alt="" />
										<div className="box-content">
											<img src={logo} alt="" />
											<h3 className="title">Conference Hall</h3>
											<span>Event # 15</span>
										</div>
									</div>
								</Col>
							))
						}
					</Row>
				</div>
			</Container>
			<GetTicket />
    </>
  )
}

export default GalleryPage
