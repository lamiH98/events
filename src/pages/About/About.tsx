import React from 'react'
import About from '../../Components/About/About'
import Counter from '../../Components/Counter/Counter'
import Features from '../../Components/Features/Features'
import Testimonials from '../../Components/Testimonials/Testimonials'
import GetTicket from '../../Components/GetTicket/GetTicket'
import Sponsors from '../../Components/Sponsors/Sponsors'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb'

const AboutPage: React.FC = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <About />
      <Counter />
      <Features />
      <Testimonials />
      <GetTicket />
    </>
  )
}

export default AboutPage