import React from 'react'
import Tech from '../components/Tech'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const TechStackScreen = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <Tech />
            <Footer />
        </React.Fragment>
    )
}

export default TechStackScreen