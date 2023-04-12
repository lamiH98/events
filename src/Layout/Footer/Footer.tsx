import React from 'react'
import './_footer.scss'
import Logo from '../../assets/images/logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaFacebookF , FaPinterest , FaTwitter , FaInstagram , FaTiktok, FaSquare } from 'react-icons/fa';
import ContactInfo from '../../Components/ContactInfo/ContactInfo'

const Footer: React.FC = () => {
  
  var date = new Date();
  var year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row className='text-center'>
          <Col>
            <div className="footer-logo">
              <img src={Logo} width={200} alt="" />
            </div>
            <p className='details'>We have very good strength in innovative technology and tools with over 35 years of experience. We makes long-term investments goal in global companies in different sectors, mainly in Europe and other countries.</p>
            <div className="social-links d-flex justify-content-center">
              <div className="social-single"><FaFacebookF /></div>
              <div className="social-single"><FaPinterest /></div>
              <div className="social-single"><FaTwitter /></div>
              <div className="social-single"><FaInstagram /></div>
              <div className="social-single"><FaTiktok /></div>
            </div>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
      <div className="copy-right d-flex align-items-center justify-content-between flex-wrap">
        <div className="copy-right-details">Copyright © {year} All Rights Reserved by <span>Lami 98</span></div>
        <div className="right">
          <span><FaSquare className="icon" /> Terms of Service</span>
          <span><FaSquare className="icon" /> Privacy Policy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer