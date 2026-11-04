import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';

const AboutScreen = () => (
  <>
    <Navbar />
    <main>
      <Banner title="About and experience" />
      <AboutMe />
      <Certificates />
    </main>
    <Footer />
  </>
);

export default AboutScreen;
