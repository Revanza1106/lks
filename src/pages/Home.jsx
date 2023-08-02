import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import BestProduct from '../components/BestProduct'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
     <AboutUs/>
     <BestProduct/>
     <Footer/>
    </div>
  )
}

export default Home