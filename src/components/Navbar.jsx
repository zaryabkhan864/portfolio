import React, { useState, useEffect } from 'react';
import logo from '../images/newlogo.png';
import { FaBars, FaTimes, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Tech Stack', href: '/tech-stack', id: 'techstack' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  // Scroll direction logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Active section logic
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
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const routeToSection = {
        '/about': 'about',
      };
      setActiveSection(routeToSection[path] || '');
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 xl:px-16 
      bg-transparent text-white transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="MZK Logo"
          className="w-24 sm:w-32 md:w-36 lg:w-32 xl:w-24 h-auto object-contain"
        />
      </div>

      {/* Desktop Menu (xl and above only) */}
      <div className="hidden xl:flex items-center space-x-4 md:space-x-5 lg:space-x-6 font-DMSans font-medium text-base">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`hover:text-royalBlue transition ${
              activeSection === link.id ? 'text-royalBlue font-semibold' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Social Icons with glow */}
        <div className="flex space-x-4 ml-6">
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

      {/* Hamburger Menu Button (below xl) */}
      <div className="xl:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-52 bg-black bg-opacity-95 rounded-lg p-4 space-y-4 text-sm font-light xl:hidden shadow-lg backdrop-blur">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-royalBlue"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-4 pt-2">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="glow-hover p-1 rounded">
              <FaGithub />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noreferrer" className="glow-hover p-1 rounded">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" className="glow-hover p-1 rounded">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
