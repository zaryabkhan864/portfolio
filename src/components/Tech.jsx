import Reveal from './Reveal';
import React from 'react';

const groups = [
  {
    name: 'Frontend',
    items: ['React', 'Redux Toolkit (RTK Query)', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Responsive and accessible UI'],
  },
  {
    name: 'Back end and data',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'SQL'],
  },
  {
    name: 'Testing and quality',
    items: ['Acceptance testing', 'Test case design', 'Debugging', 'API testing (Postman)', 'Defect tracking'],
  },
  {
    name: 'Tools and ways of working',
    items: ['Git and GitHub', 'Bitbucket', 'Jira', 'Confluence', 'Figma', 'Vercel', 'Render', 'Agile (Scrum, Kanban)'],
  },
  {
    name: 'Currently learning',
    items: ['Angular', 'RxJS', 'Jasmine and Karma'],
  },
]

const Tech = () => (
  <section id="tech-stack" className="px-4 3xl:px-6 py-16 3xl:py-24 bg-panel/40 border-y border-line">
    <div className="max-w-6xl mx-auto grid gap-6 5xl:grid-cols-[16rem_1fr]">
      <h2 className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">Skills</h2>
      <dl>
        {groups.map((group, i) => (
          <Reveal key={group.name} delay={i * 90} className="grid gap-2 3xl:grid-cols-[11rem_1fr] 3xl:gap-8 py-5 border-t border-line first:border-t-0 first:pt-0">
            <dt className="font-bold text-text">{group.name}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-md bg-ink border border-line text-sm text-text/90">
                  {item}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Tech;
