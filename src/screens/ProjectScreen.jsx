import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectScreen = () => (
  <>
    <Navbar />
    <main>
      <Banner title="Projects" />
      <Projects />
    </main>
    <Footer />
  </>
);

export default ProjectScreen;
