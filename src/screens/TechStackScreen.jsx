import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Tech from '../components/Tech';
import Footer from '../components/Footer';

const TechStackScreen = () => (
  <>
    <Navbar />
    <main>
      <Banner title="Skills" />
      <Tech />
    </main>
    <Footer />
  </>
);

export default TechStackScreen;
