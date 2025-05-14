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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 xl:px-12 
        bg-transparent text-white transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="MZK Logo"
            className="w-16 xs:w-20  lg:w-24 h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden 2xl:flex items-center space-x-4 md:space-x-5 lg:space-x-6 2xl:space-x-5 3xl:space-x-6  font-DMSans font-medium text-base 2xl:text-xs 3xl:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`hover:text-royalBlue transition ${activeSection === link.id ? 'text-royalBlue font-semibold' : ''
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-4 ml-6">
            <a
              href="https://github.com/zaryabkhan864"
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
              href="https://www.linkedin.com/in/khanzaryab/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover p-1 rounded"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="2xl:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 backdrop-blur-md z-50 text-white transition-transform duration-300 2xl:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <FaTimes size={28} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[80%] space-y-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-royalBlue transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex space-x-6 pt-6">
            <a href="https://github.com/zaryabkhan864" target="_blank" rel="noreferrer" className="glow-hover p-1 rounded">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noreferrer" className="glow-hover p-1 rounded">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/khanzaryab/" target="_blank" rel="noreferrer" className="glow-hover p-1 rounded">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
