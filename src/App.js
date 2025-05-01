import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/HomeScreen";
import About from "./screens/AboutScreen";


import TechStack from './screens/TechStackScreen';
import Project from './screens/ProjectScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import TechStackScreen from './screens/TechStackScreen';
import ProjectScreen from './screens/ProjectScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 🔥 this allows animation to trigger every time element enters viewport
    });
  }, []);
  return (
    <Router>
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
