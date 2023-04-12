import React from 'react'
import ScrollTop from '../Components/Utility/ScrollTop';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../Components/Utility/ScrollToTop/ScrollToTop';
import NavbarComponent from './NavbarComponent/NavbarComponent';
import Subscribed from './Subscribed/Subscribed';
import Sponsors from '../Components/Sponsors/Sponsors';

const MainLayout = () => {
  return (
    <div className='page'>
			<ScrollTop />
			<NavbarComponent />
			<Outlet />
			<ScrollToTop />
			<Sponsors />
			<Subscribed />
			<Footer />
		</div>
  )
}

export default MainLayout