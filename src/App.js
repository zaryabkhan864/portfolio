import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import TechStackScreen from './screens/TechStackScreen';
import ProjectScreen from './screens/ProjectScreen';
import ContactScreen from './screens/ContactScreen';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/tech-stack" element={<TechStackScreen />} />
        <Route path="/projects" element={<ProjectScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
