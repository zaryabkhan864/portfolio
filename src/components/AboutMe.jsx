import Reveal from './Reveal';
import React from 'react';

const experienceData = [
  {
    role: "Frontend & Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    type: "Part Time",
    date: "Jan 2023 - Present",
    expertise: [
      "EduSync Pro school management system: built the React and Redux Toolkit frontend with RTK Query, a reusable component library, Tailwind design tokens, responsive layouts and a multi-language UI, plus the Node.js, Express and MongoDB REST APIs behind it.",
      "Gold, silver, crypto and stock tracker: MERN app with multi-user accounts, profit/loss dashboards and price alerts, deployed on Render.",
      "Portfolio and business websites: responsive React and Tailwind sites from design to deployment; cut image weight from about 5 MB to 0.3 MB and halved the JavaScript bundle.",
      "Debug and test each feature before delivery, including REST APIs with Postman, against agreed acceptance criteria."
    ]
  },
  {
    role: "Software Engineer (Frontend, MERN)",
    company: "Digiteaz",
    location: "Karachi, Pakistan",
    type: "Full Time",
    date: "Dec 2021 - July 2022",
    expertise: [
      "Built new features and fixed bugs across the React frontend of a MERN platform.",
      "Refactored React class components to function components with hooks, using Redux Toolkit for state.",
      "Redesigned client websites with responsive layouts and improved their speed and interactivity.",
      "Built Node.js features such as Stripe payments and SMTP email; documented feature workflows in Confluence."
    ]
  },
  {
    role: "IT Support Engineer and IT Teacher",
    company: "Gokkusagi International School",
    location: "Istanbul, Turkey",
    type: "Full Time",
    date: "Jan 2023 - Present",
    expertise: [
      "Diagnose and resolve technical issues across PCs, smart boards, printers, servers and the school network.",
      "Support system upgrades and security measures to keep services reliable for all departments.",
      "Teach IT in English and lead hands-on Arduino and IoT projects."
    ]
  },
  {
    role: "Service Desk Officer (ERP Business Analysis and UAT)",
    company: "Tabba Heart Institute",
    location: "Karachi, Pakistan",
    type: "Full Time",
    date: "Sep 2017 - Dec 2020",
    expertise: [
      "Reviewed specifications for new modules of HOPE, the Oracle-based hospital ERP licensed from Shaukat Khanum Memorial Cancer Hospital, flagging gaps and risks before release.",
      "Designed and executed user acceptance test cases traced to requirements, and confirmed modules were ready before rollout.",
      "Reproduced and investigated user-reported defects, logged them as structured tickets for the vendor development team and verified the fixes.",
      "Validated back-end data integrity and traced reporting errors with SQL queries on Oracle databases.",
      "Reported issues and testing progress to IT and hospital management, and trained end users on new modules."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Dubai Islamic Bank",
    location: "Karachi, Pakistan",
    type: "Internship",
    date: "July 2015 - Aug 2015",
    expertise: [
      "Developed PL/SQL forms for the banking ERP on Oracle Database."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "DP World - Qasim International Container Terminal (QICT)",
    location: "Karachi, Pakistan",
    type: "Internship",
    date: "July 2014 - Sep 2014",
    expertise: [
      "Built Oracle forms and reports for the logistics ERP using PL/SQL and supported network troubleshooting in operations."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Excloud",
    location: "Karachi, Pakistan",
    type: "Internship",
    date: "Jan 2014 - Apr 2014",
    expertise: [
      "Developed websites, including restaurant platforms, blogs and gas and electricity service interfaces, with JavaScript and Bootstrap."
    ]
  },
];

const education = [
  {
    degree: "Master of Information Technologies in Computer Engineering (thesis-based, GPA 3.57)",
    school: "Altınbaş University, Istanbul, Turkey",
    date: "July 2020 - Apr 2023",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Hamdard University, Karachi, Pakistan",
    date: "Sep 2013 - Sep 2018",
  },
];

const Entry = ({ date, type, title, place, children }) => (
  <Reveal as="li" className="grid gap-2 3xl:grid-cols-[11rem_1fr] 3xl:gap-8 py-8 border-t border-line first:border-t-0">
    <div className="text-sm text-muted">
      <p className="font-semibold text-text/80">{date}</p>
      {type && <p className="mt-1">{type}</p>}
    </div>
    <div>
      <h3 className="text-lg font-bold text-text">{title}</h3>
      <p className="text-muted">{place}</p>
      {children}
    </div>
  </Reveal>
);

const AboutMe = () => (
  <section id="about-me" className="px-4 3xl:px-6 py-16 3xl:py-24">
    <div className="max-w-6xl mx-auto">
      <Reveal className="grid gap-6 5xl:grid-cols-[16rem_1fr]">
        <h2 className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">About me</h2>
        <p className="text-lg leading-relaxed text-muted max-w-[68ch]">
          Frontend developer with an MSc in Computer Engineering. I turn UI/UX designs into responsive, accessible interfaces with React, JavaScript/TypeScript, HTML, CSS/Sass and Tailwind, and connect them to Node.js and Express REST APIs. I built the frontend and back end of EduSync Pro, a school management system running as a demo for schools in Turkey and Pakistan. Before moving into development I led user acceptance testing on a hospital ERP, so I test every feature against real acceptance criteria. I am now learning Angular, RxJS and unit testing with Jasmine and Karma.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 5xl:grid-cols-[16rem_1fr]">
        <h2 className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">Experience</h2>
        <ol>
          {experienceData.map((item) => (
            <Entry
              key={item.role + item.company}
              date={item.date}
              type={item.type}
              title={item.role}
              place={item.company === "Freelance" ? item.location : `${item.company}, ${item.location}`}
            >
              <ul className="mt-3 space-y-2 text-text/90 leading-relaxed max-w-[70ch] list-disc pl-5 marker:text-line">
                {item.expertise.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Entry>
          ))}
        </ol>
      </div>

      <div className="mt-16 grid gap-6 5xl:grid-cols-[16rem_1fr]">
        <h2 className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">Education</h2>
        <ol>
          {education.map((ed) => (
            <Entry key={ed.degree} date={ed.date} title={ed.degree} place={ed.school} />
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default AboutMe;
