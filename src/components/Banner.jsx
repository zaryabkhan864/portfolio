import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import profile from '../images/profile.webp';

const checks = [
  'Requirements reviewed for gaps',
  'Test cases traced to each requirement',
  'Regression suite run',
  'APIs checked in Postman',
  'Data validated with SQL',
  'Defects fixed and re-verified',
];

const Banner = ({ title }) => {
  if (title) {
    return (
      <section className="pt-28 pb-10 px-4 3xl:px-6 border-b border-line">
        <div className="fade-up max-w-6xl mx-auto">
          <p className="text-muted font-semibold">Zaryab Khan</p>
          <h1 className="mt-1 text-3xl 3xl:text-4xl font-extrabold tracking-tight text-text">{title}</h1>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 3xl:pt-36 3xl:pb-24 px-4 3xl:px-6 border-b border-line">
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6C9EF8 0%, transparent 65%)' }}
      />
      <div className="relative max-w-6xl mx-auto grid gap-12 5xl:grid-cols-[1.25fr_1fr] items-center">
        <div>
          <div className="fade-up flex items-center gap-4" style={{ animationDelay: '0.05s' }}>
            <img
              src={profile}
              alt="Muhammad Zaryab Khan"
              width="64"
              height="64"
              className="w-16 h-16 rounded-full object-cover border border-line"
            />
            <div>
              <p className="font-bold text-text">Muhammad Zaryab Khan</p>
              <p className="text-sm text-muted">Istanbul, Turkey</p>
            </div>
          </div>

          <h1 style={{ animationDelay: '0.15s' }} className="fade-up mt-8 text-4xl 3xl:text-5xl 6xl:text-6xl font-extrabold tracking-tight leading-[1.05] text-text max-w-[16ch]">
            QA engineer and software developer
          </h1>
          <p style={{ animationDelay: '0.3s' }} className="fade-up mt-6 text-lg text-muted max-w-[52ch] leading-relaxed">
            I turn requirements into test cases, catch defects before they reach users, and build web
            apps with Node.js and React.
          </p>

          <div style={{ animationDelay: '0.45s' }} className="fade-up mt-8 flex flex-wrap gap-3">
            <a
              href="/Muhammad_Zaryab_Khan_CV.pdf"
              download
              className="inline-flex items-center px-5 py-3 rounded-lg bg-accent text-ink font-bold hover:bg-[#86B0FA] hover:-translate-y-0.5 transition"
            >
              Download CV
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-line text-text font-bold hover:border-accent hover:-translate-y-0.5 transition"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div style={{ animationDelay: '0.25s' }} className="fade-up rounded-xl border border-line bg-panel/90 backdrop-blur p-6 3xl:p-8 shadow-[0_20px_60px_-20px_rgba(108,158,248,0.35)]" aria-label="Release checklist">
          <p className="font-bold text-text">Before every release</p>
          <ul className="mt-5 space-y-3">
            {checks.map((item, i) => (
              <li
                key={item}
                className="check-row flex items-start gap-3 text-text"
                style={{ animationDelay: `${0.8 + i * 0.25}s` }}
              >
                <span className="mt-0.5 flex-none w-5 h-5 rounded-full bg-pass/15 text-pass flex items-center justify-center">
                  <FaCheck size={10} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p
            className="check-row mt-6 pt-4 border-t border-line text-sm font-semibold text-pass"
            style={{ animationDelay: `${0.8 + checks.length * 0.25}s` }}
          >
            {checks.length} of {checks.length} passed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
