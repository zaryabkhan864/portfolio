import React from 'react';
import logo from '../images/logo.png';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white w-full px-4 pt-24 pb-10" aria-label="Footer">
      <div className="w-full max-w-7xl mx-auto">

        {/* Logo and Contact */}
        <div className="flex flex-col sm:flex-col lg:flex-col 2xl:flex-col justify-between items-center mb-4 gap-4">
          <img
            src={logo}
            alt="MZK Logo"
            className="w-48 md:w-60 object-contain"
            aria-label="Company Logo"
          />
          <div className="flex flex-col sm:flex-col lg:flex-col 2xl:flex-col sm:gap-6 gap-2 font-DMSans text-18px font-Regular text-center lg:text-left items-center">
            <div aria-label="Phone Number">+90-507-4467087</div>
            <div aria-label="Email">zaryabkhan864@gmail.com</div>
            <div className="flex space-x-4 ml-0 sm:ml-4">
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
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-4 w-full" />

        {/* Navigation & Credit */}
        <div className="flex flex-col lg:flex-col 2xl:flex-row justify-between items-center gap-4">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-center font-DMSans text-18px font-Regular" aria-label="Footer Navigation">
            <a href="#" className="glow-hover-text" aria-label="Home">Home</a>
            <a href="#" className="glow-hover-text" aria-label="About">About</a>
            <a href="#" className="glow-hover-text" aria-label="Technologies">Technologies</a>
            <a href="#" className="glow-hover-text" aria-label="Projects">Projects</a>
            <a href="#" className="glow-hover-text" aria-label="Contact">Contact</a>
          </nav>
          <div className="font-poppins text-18px font-Regular text-center lg:text-right" aria-label="Footer Credit">
            Designed and built by
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent px-1"> Muhammad Zayab Khan </span>
            With
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent px-1"> Love </span>
            &
            <span className="bg-gradient-to-r from-pink-600 to-fuchsia-500 bg-clip-text text-transparent px-1"> Tea </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
