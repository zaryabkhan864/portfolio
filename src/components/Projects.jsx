import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import p1 from '../images/p1.webp';
import p2 from '../images/p2.webp';
import p3 from '../images/p3.webp';

// Add a real URL to liveLink or codeLink and its button appears on the card.
const projects = [
  {
    title: 'School Management System',
    description:
      'Desktop system on Oracle 9i with student and teacher registration, academic and finance modules, and reports for grades, attendance and fee vouchers.',
    techStack: 'Oracle Forms, PL/SQL, Oracle Reports',
    image: p1,
    liveLink: '',
    codeLink: '',
  },
  {
    title: 'SnipHub',
    description:
      'React NFT application with a landing page, login, NFT collection pages, target price alerts and a watchlist.',
    techStack: 'React, JavaScript, SASS',
    image: p2,
    liveLink: '',
    codeLink: '',
  },
  {
    title: 'NFT Market',
    description:
      'Responsive React landing page for an NFT marketplace, built with Bootstrap 5, carousels, count-up stats and scroll animations.',
    techStack: 'React, Bootstrap 5, JavaScript',
    image: p3,
    liveLink: '',
    codeLink: '',
  },
];

const Projects = () => (
  <section id="projects" className="px-4 3xl:px-6 py-16 3xl:py-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">Projects</h2>
      <div className="mt-8 grid gap-6 3xl:grid-cols-2 5xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col rounded-xl border border-line bg-panel overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              width="900"
              height="600"
              className="w-full aspect-[3/2] object-cover object-top border-b border-line"
            />
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-lg font-bold text-text">{project.title}</h3>
              <p className="mt-2 text-muted leading-relaxed flex-1">{project.description}</p>
              <p className="mt-4 text-sm text-text/80">{project.techStack}</p>
              {(project.liveLink || project.codeLink) && (
                <div className="mt-4 pt-4 border-t border-line flex gap-5 text-sm font-semibold">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline">
                      <FaExternalLinkAlt size={12} aria-hidden="true" /> Live site
                    </a>
                  )}
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline">
                      <FaGithub size={14} aria-hidden="true" /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
