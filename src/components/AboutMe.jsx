import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import WE_BG from "../images/workexperience_background.png";
import Banner_Image_Mobile from '../images/workexperience_background.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutMe = () => {

  const [backgroundImage, setBackgroundImage] = useState(WE_BG)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(Banner_Image_Mobile)
      } else {
        setBackgroundImage(WE_BG)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const experienceData = [
    {
      role: "Software Engineer",
      company: "Digiteaz",
      location: "Karachi, Pakistan",
      type: "Full Time",
      date: "Dec 2021 - July 2022",
      expertise: [
        "Redesigned and modernized multiple websites with the MERN stack to create intuitive and responsive user interfaces.",
        "Improved frontend speed and interactivity by refactoring and optimizing the existing codebases.",
        "Applied on-page SEO techniques to strengthen online visibility and elevate user acquisition organically.",
        "Introduced animation libraries and UI frameworks such as Framer Motion, AOS, and Material-UI for an enhanced UI.",
        "Managed backend improvements with Node.js including payment integration via Stripe and SMTP configuration using Mailtrap."
      ]
    },
    {
      role: "Business Analyst",
      company: "Tabba Heart Institution",
      location: "Karachi, Pakistan",
      type: "Full Time",
      date: "May 2017 - Sep 2019",
      expertise: [
        "Collaborated with medical and administrative departments to elicit and document business requirements for the Oracle-based hospital ERP system, ensuring alignment between operational needs and technical solutions.",
        "Analyzed user-reported issues and system bugs, prioritized them based on impact, and translated findings into structured tickets for the development team, facilitating faster resolution and improved system reliability.",
        "Maintained comprehensive process documentation, including functional specifications, business requirement documents (BRDs), and workflow diagrams, to improve transparency and communication between technical and non-technical teams.",
        "Conducted SQL queries on Oracle databases to validate data integrity, analyze reporting errors, and support decision-making with accurate information.",
        "Assisted developers during system enhancement and testing phases, verifying functionality against requirements and coordinating feedback loops to refine product performance.",
        "Led user acceptance testing (UAT) and end-user training sessions, preparing detailed test cases and ensuring seamless adoption of new modules across departments.",
        "Partnered with IT and management to propose system improvements and process optimizations, directly contributing to enhanced operational efficiency and data-driven management at the hospital."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Dubai Islamic bank ",
      location: "Karachi, Pakistan",
      type: "Internship",
      date: "July 2015 - Aug 2015",
      expertise: [
        "Implemented banking ERP by developing forms using PLSQL and demonstrated proficiency in working with Oracle Database 9i.",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "DP World - Qasim International Container Terminal (QICT)",
      location: "Karachi, Pakistan",
      type: "Internship",
      date: "July 2014 - Sep 2014",
      expertise: [
        "Provided technical support and network troubleshooting within the operations department, ensuring smooth connectivity and minimal downtime for business-critical systems",
        "Logistics ERP by creating new forms and reports in Oracle using PLSQL, alongside expertise in Oracle Database 9i",

      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Excloud",
      location: "Karachi, Pakistan",
      type: "Internship",
      date: "Jan 2014 - Apr 2014",
      expertise: [
        "Developed diverse websites, including interactive restaurant platforms, engaging blogs, and robust Gas and Electricity service interfaces, using JavaScript and Bootstrap frameworks to showcase proficiency in web application development.",

      ]
    },
  ];

  return (
    <section
      id="about-me"
      className="w-full  items-center min-h-screen  text-white py-20 px-4 sm:px-6 lg:px-8 relative bg-cover  bg-center bg-no-repeat md:bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2
            id="about-me-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-Bold text-solidHeadingDark mb-2"
          >
            About Me
          </h2>
        </motion.div>

        {/* About Me Description */}
        <motion.div variants={fadeUp} className="space-y-6 mb-10">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl font-poppins font-Regular text-lightContent">
            Business Analyst and Software Engineer with a robust background in software development, combining analytical precision with deep technical understanding to enhance business performance. Experienced in gathering and analyzing requirements, documenting workflows, and validating data and APIs across the software lifecycle. Skilled in requirements elicitation, process documentation, SQL data validation, and API testing within Agile environments. Known for bridging communication between stakeholders such as product owners, developers, and QA teams to ensure functional alignment and system reliability. Passionate about transforming complex technical insights into practical business outcomes that improve efficiency and user satisfaction.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div variants={fadeUp} className="space-y-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-Bold text-white mb-6">
            Work Experience
          </h2>
          <div className="space-y-10">
            {experienceData.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="pb-6 border-b border-gray-700/40">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="font-poppins text-md sm:text-lg md:text-xl font-Semibold text-white">
                      {item.role}
                    </h3>
                    <p className="font-poppins text-sm font-Regular text-lightContent">
                      {item.company} @ {item.location}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                    <span className="font-poppins text-xs md:text-sm font-Semibold text-white bg-gray-700/60 px-3 py-0.5 rounded-full w-fit">
                      {item.type}
                    </span>
                    <span className="font-poppins text-xs md:text-sm font-Regular text-lightContent">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Expertise List */}
                {/* Expertise List */}
                <ul className="list-disc list-inside border-l-2 border-gradient-to-b from-blue-400 to-purple-500 pl-4 mt-3 space-y-1 text-sm md:text-md text-white font-poppins">
                  {item.expertise.map((point, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      variants={fadeUp}
                      className="leading-relaxed"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={fadeUp} className="space-y-10 mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-Bold text-white mb-6">
            Education
          </h2>

          <div className="space-y-6">
            {/* Master's */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="font-poppins text-sm sm:text-md md:text-lg lg:text-xl font-Regular text-white">
                    Master in Computer Engineering
                  </h3>
                  <p className="font-poppins text-sm font-Regular text-lightContent">
                    Altinbas University @ Istanbul, Turkey
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <span className="font-poppins text-sm font-Semibold text-white bg-gray-700 bg-opacity-50 px-2 py-0.5 rounded-full w-fit">
                    Full Time
                  </span>
                  <span className="font-poppins text-sm font-Regular text-lightContent">
                    Aug 2016 - Dec 2020
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bachelor's */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="font-poppins text-sm sm:text-md md:text-lg lg:text-xl font-Regular text-white">
                    Bachelor Science in Computer Science
                  </h3>
                  <p className="font-poppins text-sm font-Regular text-lightContent">
                    Hamdard University @ Karachi, Pakistan
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <span className="font-poppins text-sm font-Semibold text-white bg-gray-700 bg-opacity-50 px-2 py-0.5 rounded-full w-fit">
                    Full Time
                  </span>
                  <span className="font-poppins text-sm font-Regular text-lightContent">
                    Aug 2016 - Dec 2020
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
