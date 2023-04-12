import React from 'react'
import './_gallery.scss'
import logo from '../../assets/images/logo.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TitleSection from '../Utility/TitleSection/TitleSection'
import { galleryImages } from '../../data.js'

const Gallery: React.FC = () => {
  return (
    <div className="gallery">
			<Row>
				<TitleSection title="Photo Gallery" subTitle="Have A Look On" />
			</Row>
			<Row>
				{
					galleryImages.slice(0, 8).map((img, index) => (
						<Col lg={3} md={6} sm={6} key={index}>
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
  )
}

export default Gallery
