import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/newlogo.png';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="bg-neutral-900 text-white w-full px-4 pt-24 pb-10" aria-label="Footer">
      <div className="w-full max-w-7xl mx-auto">

        {/* Logo and Contact */}
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col 3xl:flex-col 4xl:flex-row justify-between items-center mb-4 gap-4">
          <img
            src={logo}
            alt="MZK Logo"
            className="w-28 md:w-44 object-contain"
            aria-label="Company Logo"
          />
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row sm:gap-6 gap-2 font-DMSans text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-Regular text-center lg:text-left items-center">
            <div aria-label="Phone Number">+90-507-4467087</div>
            <div aria-label="Email">zaryabkhan864@gmail.com</div>
            <div className="flex space-x-4 ml-0 sm:ml-4">
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
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-4 w-full" />

        {/* Navigation & Credit */}
        <div className="flex flex-col lg:flex-col 2xl:flex-row justify-between items-center gap-4">
          <nav
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-center font-DMSans text-xs md:text-md lg:text-md xl:text-md 2xl:text-lg font-Regular"
            aria-label="Footer Navigation"
          >
            <Link
              to="/"
              className={`glow-hover-text transition ${currentPath === '/' ? 'glow-text font-Bold' : ''}`}
              aria-label="Home"
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`glow-hover-text transition ${currentPath === '/about' ? 'glow-text font-Bold' : ''}`}
              aria-label="About"
            >
              About
            </Link>
            <Link
              to="/tech-stack"
              className={`glow-hover-text transition ${currentPath === '/tech-stack' ? 'glow-text font-Bold' : ''}`}
              aria-label="Technologies"
            >
              Technologies
            </Link>
            <Link
              to="/projects"
              className={`glow-hover-text transition ${currentPath === '/projects' ? 'glow-text font-Bold' : ''}`}
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`glow-hover-text transition ${currentPath === '/contact' ? 'glow-text font-Bold' : ''}`}
              aria-label="Contact"
            >
              Contact
            </Link>
          </nav>

          <div className="font-poppins text-xs md:text-md lg:text-md xl:text-md 2xl:text-lg font-Regular lg:text-right" aria-label="Footer Credit">
            Designed and built by
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent px-1"> Muhammad Zayab Khan </span>
            With
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent px-1"> Love </span>
            &
            <span className="bg-gradient-to-r from-pink-600 to-fuchsia-500 bg-clip-text text-transparent px-1"> Code </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
