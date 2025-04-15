import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
