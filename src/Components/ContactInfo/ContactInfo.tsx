import React from 'react'
import './_contactInfo.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { contactInfos } from '../../data.js'


const ContactInfo: React.FC = () => {
  return (
    <div className='contact-info'>
      <Row>
        {
          contactInfos.map(contactInfo => (
            <Col lg={4} md={6} key={contactInfo.id}>
              <div className='contact-info-single d-flex align-items-center'>
                <div className="icon-section">
                  <span className="icon">{contactInfo.icon}</span>
                </div>
                <div className="content">
                  <span className='subTitle'>{contactInfo.subTitle}</span>
                  <h6 className='title'>{contactInfo.title}</h6>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default ContactInfo
