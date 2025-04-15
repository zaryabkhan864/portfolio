import React from "react";
import WE_BG from '../images/workexperience_background.png'
const experiences = [
  {
    title: "Software Engineer In Digiteaz",
    description:
      "Digiteaz is a software house located in Pakistan Karachi working with different technologies.",
  },
  {
    title: "Service desk officer In Tabba Heart Hospital (Karachi, Pakistan)",
    description:
      "THI is one of the highest-ranked hospitals in Pakistan, established in the year 2005 emphasizing offering cardiac treatment and services.",
  },
  {
    title: "Internee In Dubai Islamic bank / Karachi, Pakistan",
    description:
      "Dubai Islamic bank is an international bank based in Dubai that works according to the Internal Sharia Supervisory Committee (\"ISSC\").",
  },
  {
    title: "Internee In Qasim International Container Terminal (QICT)",
    description:
      "DP World is a multinational firm located in 103 countries operating as a global trade enabler.",
  },
  {
    title: "Internee In Excloud software house / Karachi, Pakistan",
    description:
      "DP World is a multinational firm located in 103 countries operating as a global trade enabler.",
  },
];

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="relative bg-cover bg-center bg-no-repeat bg-fixed text-white py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${WE_BG})`,
      }}
      aria-labelledby="work-experience-heading"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2
          id="work-experience-heading"
          className="font-poppins text-48px font-Bold text-solidHeadingDark mb-2"
        >
          Work Experience
        </h2>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} aria-label={`Experience ${index + 1}`}>
            <h3 className="font-poppins text-20px font-Bold mb-2">{exp.title}</h3>
            <p className="font-poppins text-14px font-Regular text-lightContent">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
