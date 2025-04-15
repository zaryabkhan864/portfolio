import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Tech from '../components/Tech'
import Certificates from '../components/Certificates'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollFadeIn from '../animations/ScrollFadeIn'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        })
    }, [])
    return (
        <React.Fragment className="bg-gray-900 text-white">
                        <Navbar />
            <ScrollFadeIn><Banner /></ScrollFadeIn>
            <ScrollFadeIn delay={0.1}><Tech /></ScrollFadeIn>
            <ScrollFadeIn delay={0.2}><AboutMe /></ScrollFadeIn>
            <ScrollFadeIn delay={0.3}><Certificates /></ScrollFadeIn>
            <ScrollFadeIn delay={0.4}><Projects /></ScrollFadeIn>
            <ScrollFadeIn delay={0.5}><Contact /></ScrollFadeIn>
            <Footer />
        </React.Fragment>
    )
}

export default Home