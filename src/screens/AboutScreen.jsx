import React from 'react'
import AboutMe from '../components/AboutMe'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const AboutScreen = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Banner/>
        <AboutMe/>
        <Footer/>
    </React.Fragment>
  )
}

export default AboutScreen