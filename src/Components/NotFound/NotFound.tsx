import React from 'react'
import Footer from '../../Layout/Footer/Footer'
import './_NotFound.scss'
import { Link } from 'react-router-dom'
import NavbarComponent from '../../Layout/NavbarComponent/NavbarComponent'

const NotFound: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <div className='not-found'>
        <div className="number">404</div>
        <div className="text"><span>Ooops...</span><br /> page not found</div>
        <Link to='/' className='custom-button'>Back to home page</Link>
      </div>
      <Footer />
    </>
  )
}

export default NotFound