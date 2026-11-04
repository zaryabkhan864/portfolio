import Reveal from './Reveal';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const details = [
  { icon: FaEnvelope, label: 'zaryabkhan864@gmail.com', href: 'mailto:zaryabkhan864@gmail.com' },
  { icon: FaPhone, label: '+90 507 446 7087', href: 'tel:+905074467087' },
  { icon: FaLinkedin, label: 'linkedin.com/in/khanzaryab', href: 'https://www.linkedin.com/in/khanzaryab/' },
  { icon: FaMapMarkerAlt, label: 'Istanbul, Turkey', href: null },
];

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-ink border border-line text-text placeholder-muted/60 focus:outline-none focus:border-accent';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm('portfolio', 'template_89yi8mm', form.current, 'iQ4ye1guCccqND7C_')
      .then(
        () => {
          setStatus('sent');
          form.current.reset();
        },
        () => setStatus('error')
      );
  };

  return (
    <section id="contact" className="px-4 3xl:px-6 py-16 3xl:py-24">
      <div className="max-w-6xl mx-auto grid gap-10 5xl:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">Contact</h2>
          <p className="mt-4 text-lg text-muted max-w-[46ch] leading-relaxed">
            Hiring for a QA or developer role, or need help with a project? Send me a message and I will
            get back to you soon.
          </p>
          <ul className="mt-8 space-y-4">
            {details.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className="text-accent flex-none" aria-hidden="true" />
                {href ? (
                  <a
                    href={href}
                    className="text-text hover:text-accent break-all"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-text">{label}</span>
                )}
              </li>
            ))}
          </ul>
          <a
            href="/Muhammad_Zaryab_Khan_CV.pdf"
            download
            className="mt-8 inline-flex px-5 py-3 rounded-lg border border-line text-text font-bold hover:border-accent transition-colors"
          >
            Download CV
          </a>
        </Reveal>

        <Reveal delay={120}>
        <form ref={form} onSubmit={sendEmail} className="rounded-xl border border-line bg-panel p-6 3xl:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-text">Name</label>
            <input id="name" name="user_name" type="text" required autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-text">Email</label>
            <input id="email" name="user_email" type="email" required autoComplete="email" className={inputClass} />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-text">Message</label>
            <textarea id="message" name="message" rows="5" required className={inputClass} />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 rounded-lg bg-accent text-ink font-bold hover:bg-[#86B0FA] transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p role="status" aria-live="polite" className="text-sm min-h-[1.25rem]">
            {status === 'sent' && <span className="text-pass">Message sent. I will get back to you soon.</span>}
            {status === 'error' && (
              <span className="text-[#F28B82]">
                The message could not be sent. Check your connection and try again, or email me directly.
              </span>
            )}
          </p>
        </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
