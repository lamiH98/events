import React from 'react'
import About from '../../Components/About/About'
import Gallery from '../../Components/Gallery/Gallery'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Counter from '../../Components/Counter/Counter'
import Features from '../../Components/Features/Features'
import GetTicket from '../../Components/GetTicket/GetTicket'
import Header from './Components/Header/Header'
import Posts from './Components/Posts/Posts'
import Price from './Components/Price/Price'
import Team from './Components/Team/Team'
import Welcome from './Components/Welcome/Welcome'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Features />
      <Team />
      <Price />
      <Counter />
      <Testimonials />
      <GetTicket />
      <Posts />
      <Gallery />
    </>
  )
}

export default Home