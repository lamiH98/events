import React from 'react'
import './_header.scss'
import HeaderImg1 from '../../../../assets/images/header/header-2.png'
import HeaderImg2 from '../../../../assets/images/header/header-3.svg'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h1 className='title'>Development Conference Day</h1>
        <h3 className="year">2024</h3>
        <div className="location">November 10-12, Boston, Canada</div>
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
      </div>
      <div className="floating-images">
        <img className='img-2' src={HeaderImg1} alt="" />
        <img className='img-1' src={HeaderImg2} alt="" />
      </div>
    </div>
  )
}

export default Header