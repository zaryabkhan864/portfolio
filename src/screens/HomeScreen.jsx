import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Tech from '../components/Tech';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeScreen = () => (
  <>
    <Navbar />
    <main>
      <Banner />
      <AboutMe />
      <Tech />
      <Projects />
      <Certificates />
      <Contact />
    </main>
    <Footer />
  </>
);

export default HomeScreen;
