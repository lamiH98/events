import React, {useEffect, useState} from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPinterest, FaTwitter } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsListNested } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import Button from '../../Components/Utility/Button/Button'
import './_navbarComponent.scss'

const NavbarComponent: React.FC = () => {

  const [close, setClose] = useState<boolean>(true);
  
  const [fixedBar, setfixedBar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setfixedBar(true);
        } else {
          setfixedBar(false);
        }
    });
}, []);

  return (
    <div className={`custom-navbar ${close ? '' : 'open-menu'}`}>
        <div className="overlay" style={{ width: close ? '0' : '100%' }}></div>
        <div className="nav-header-top d-flex align-items-center justify-content-around">
          <ul className="list-unstyled header-top-info d-flex gap-5">
            <li>
              <span>Address: </span>
              <span>203 Madison Ave, NY, USA</span>
            </li>
            <li>
              <span>Timeing: </span>
              <span>Monday - Friday 9am - 6pm</span>
            </li>
          </ul>
          <ul className="list-unstyled header-top-social">
            <FaInstagram className='icon' />
            <FaFacebook className='icon' />
            <FaPinterest className='icon' />
            <FaTwitter className='icon' />
          </ul>
        </div>
        <div className={`nav-header-lower ${fixedBar ? 'navbar-bg' : ''} d-flex align-items-center justify-content-around`}>
          <div className="logo">
            <NavLink to="/"><img src={Logo} alt="" /></NavLink>
          </div>
          <ul className="nav-links list-unstyled d-flex align-items-center text-capitalize">
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/buy-ticket">buy ticket</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/speakers">Speakers</NavLink></li>
            <li><NavLink to="/testimonials">testimonials</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/buy-ticket"><Button title="Book Ticket" /></NavLink></li>
          </ul>
        </div>
        <div className="nav-mobile">
          <div className="nav-mobile-header d-flex justify-content-between">
            <div className="logo">
              <NavLink to="/"><img src={Logo} alt="" /></NavLink>
            </div>
            <div className="open-icon" onClick={() => setClose(!close)}>
              <BsListNested />
            </div>
          </div>
          <div className="menu" style={{ right: close ? '-18rem' : '0' }}>
            <div className="menu-header d-flex justify-content-around align-items-center">
              <div className="logo">
                <NavLink to="/"><img src={Logo} alt="" /></NavLink>
              </div>
              <div className="close-icon" onClick={() => setClose(true)}>
                <AiFillCloseCircle />
              </div>
            </div>
            <ul className="nav-links list-unstyled d-flex flex-column align-items-start text-capitalize">
              <li><NavLink to="/">home</NavLink></li>
              <li><NavLink to="/about">about</NavLink></li>
              <li><NavLink to="/buy-ticket">buy ticket</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>
              <li><NavLink to="/speakers">Speakers</NavLink></li>
            <li><NavLink to="/testimonials">testimonials</NavLink></li>
              <li><NavLink to="/faq">FAQ</NavLink></li>
              <li><NavLink to="/contact">contact</NavLink></li>
              <li><NavLink to="/buy-ticket"><Button title="Book Ticket" /></NavLink></li>
            </ul>
            <div className="menu-info">

              <div className="info-single d-flex gap-3">
                <div className="icon">
                  <FaLocationArrow />
                </div>
                <div className="content">
                  <span>203 Madison Ave, NY, USA</span>
                  <h6>ADDRESS</h6>
                </div>
              </div>

              <div className="info-single d-flex gap-3">
                <div className="icon">
                  <BsListNested />
                </div>
                <div className="content">
                  <span>Monday - Friday 9am - 6pm</span>
                  <h6>TIMEING</h6>
                </div>
              </div>

              <div className="info-single d-flex gap-3">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="content">
                  <span>envato@gmail.com</span>
                  <h6>MAIL TO US</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default NavbarComponent