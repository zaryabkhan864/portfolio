// Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { FaBars, FaTimes, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Tech Stack', href: '#techstack', id: 'techstack' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const path = location.pathname;
  
    if (path === '/') {
      const handleScroll = () => {
        const scrollPos = window.scrollY;
  
        if (scrollPos < 100) {
          setActiveSection('home');
          return;
        }
  
        const sectionIds = navLinks
          .map((link) => link.id)
          .filter((id) => document.getElementById(id));
  
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const section = document.getElementById(sectionIds[i]);
          if (section && section.offsetTop <= scrollPos + 50) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // run on load
  
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const routeToSection = {
        '/about': 'about',
        // Add more routes if needed
      };
      setActiveSection(routeToSection[path] || '');
    }
  }, [location]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-8 md:px-16 text-white bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="MZK Logo" className="w-48" />
      </div>

      {/* Desktop Links + Social Icons */}
      <div className="hidden md:flex items-center space-x-6 font-DMSans font-medium text-20px md:text-16px">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`glow-hover-text ${
              activeSection === link.id ? 'active-glow' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Social Icons */}
        <div className="flex space-x-4 ml-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover p-1 rounded"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover p-1 rounded"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover p-1 rounded"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-20 right-8 bg-black bg-opacity-90 text-white p-6 rounded-lg space-y-4 text-sm font-light md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-royalBlue"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
