import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../images/logo-mzk.webp';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/tech-stack' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const linkClass = ({ isActive }) =>
  `px-3 py-2 text-sm font-semibold transition-colors border-b-2 ${
    isActive ? 'text-accent border-accent' : 'text-muted border-transparent hover:text-text'
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 3xl:px-6 h-16" aria-label="Main">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Home">
          <img src={logo} alt="" width="40" height="40" className="w-10 h-10" />
          <span className="font-bold text-text">Zaryab Khan</span>
        </NavLink>

        <div className="hidden 3xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} end={link.href === '/'} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
          <span className="w-px h-5 bg-line mx-3" aria-hidden="true" />
          <a href="https://github.com/zaryabkhan864" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted hover:text-text">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/khanzaryab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted hover:text-text">
            <FaLinkedin size={18} />
          </a>
        </div>

        <button
          className="3xl:hidden p-2 text-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="3xl:hidden border-t border-line bg-ink px-4 pb-4">
          <div className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-3 pl-3 border-b border-line border-l-2 text-base font-semibold ${isActive ? 'text-accent border-l-accent' : 'text-text border-l-transparent'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/zaryabkhan864" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-text">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/khanzaryab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-text">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
