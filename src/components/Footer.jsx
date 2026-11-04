import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Skills', to: '/tech-stack' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => (
  <footer className="border-t border-line px-4 3xl:px-6 py-10">
    <div className="max-w-6xl mx-auto flex flex-col 5xl:flex-row gap-6 5xl:items-center 5xl:justify-between">
      <p className="text-sm text-muted">© {new Date().getFullYear()} Muhammad Zaryab Khan</p>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="text-muted hover:text-text">
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4">
        <a href="https://github.com/zaryabkhan864" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-text">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/khanzaryab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-text">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
