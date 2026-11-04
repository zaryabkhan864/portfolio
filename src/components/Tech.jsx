import React from 'react';

const groups = [
  {
    name: 'Testing',
    items: ['Test case design', 'Functional testing', 'Regression testing', 'User acceptance testing', 'Requirements traceability', 'Defect tracking'],
  },
  {
    name: 'Back-end and data',
    items: ['REST API testing (Postman)', 'SQL', 'Oracle', 'MySQL', 'MongoDB', 'PL/SQL'],
  },
  {
    name: 'Development',
    items: ['JavaScript', 'TypeScript', 'React.js', 'Redux', 'Node.js', 'Express.js', 'Python', 'Tailwind CSS'],
  },
  {
    name: 'Tools and ways of working',
    items: ['Jira', 'Confluence', 'Git and GitHub', 'Bitbucket', 'Figma', 'Agile (Scrum, Kanban)'],
  },
];

const Tech = () => (
  <section id="tech-stack" className="px-4 3xl:px-6 py-16 3xl:py-24 bg-panel/40 border-y border-line">
    <div className="max-w-6xl mx-auto grid gap-6 5xl:grid-cols-[16rem_1fr]">
      <h2 className="text-2xl 3xl:text-3xl font-extrabold tracking-tight text-text">Skills</h2>
      <dl>
        {groups.map((group) => (
          <div key={group.name} className="grid gap-2 3xl:grid-cols-[11rem_1fr] 3xl:gap-8 py-5 border-t border-line first:border-t-0 first:pt-0">
            <dt className="font-bold text-text">{group.name}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-md bg-ink border border-line text-sm text-text/90">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Tech;
