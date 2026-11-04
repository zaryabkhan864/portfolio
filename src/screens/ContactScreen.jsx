import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactScreen = () => (
  <>
    <Navbar />
    <main>
      <Banner title="Contact" />
      <Contact />
    </main>
    <Footer />
  </>
);

export default ContactScreen;
