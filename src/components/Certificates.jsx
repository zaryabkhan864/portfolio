import Reveal from './Reveal';
import React from 'react';
import cc1 from '../images/cc1.webp';
import cc2 from '../images/cc2.webp';
import cc3 from '../images/cc3.webp';
import cc4 from '../images/cc4.webp';

const certificates = [
  { src: cc1, alt: 'React and Redux certificate' },
  { src: cc2, alt: 'Programming for Everybody (Python) certificate' },
  { src: cc3, alt: 'Managing Big Data with MySQL certificate' },
  { src: cc4, alt: 'Practical CSS3 Flexbox, Media Queries and CSS Grid certificate' },
];

const Certificates = () => (
  <section id="certificates" className="px-4 3xl:px-6 py-16 3xl:py-24 bg-panel/40 border-y border-line">
    <div className="max-w-6xl mx-auto">
      <Reveal as="h2" className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">Certificates</Reveal>
      <div className="mt-8 grid gap-4 grid-cols-1 xl:grid-cols-2 5xl:grid-cols-4">
        {certificates.map((cert, i) => (
          <Reveal key={cert.src} delay={i * 100}>
          <a
            href={cert.src}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden border border-line bg-white hover:border-accent hover:-translate-y-1 transition"
          >
            <img src={cert.src} alt={cert.alt} loading="lazy" className="w-full aspect-[4/3] object-contain" />
          </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
