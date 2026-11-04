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
      role: "Freelance Software Developer",
      company: "Freelance",
      location: "Remote",
      type: "Part Time",
      date: "Jan 2023 - Present",
      expertise: [
        "Build and test web applications for clients with Node.js, Express, MongoDB and React.js; test REST APIs with Postman before delivery.",
        "Agree requirements and acceptance criteria with clients and verify features against them."
      ]
    },
    {
      role: "Software Engineer",
      company: "Digiteaz",
      location: "Karachi, Pakistan",
      type: "Full Time",
      date: "Dec 2021 - July 2022",
      expertise: [
        "Fixed bugs across platform features and refactored React components from class-based to function-based with hooks.",
        "Built Node.js back-end features, including Stripe payment integration and SMTP email configuration.",
        "Improved frontend speed and interactivity by refactoring and optimizing existing MERN codebases.",
        "Documented feature workflows in Confluence to speed up onboarding for new developers."
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
            QA-focused software engineer with an MSc in Computer Engineering. I review specifications, design and execute functional and regression test cases traced to requirements, and manage defects from report through investigation to verified fix. Hands-on with user acceptance testing on an Oracle-based hospital ERP, REST API testing with Postman and SQL data validation, plus web development with Node.js, React.js and MongoDB. I enjoy finding issues early, working closely with developers and stakeholders, and I am growing my skills in test automation and CI/CD.
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
                    Master of Information Technologies in Computer Engineering (thesis-based, GPA 3.57)
                  </h3>
                  <p className="font-poppins text-sm font-Regular text-lightContent">
                    Altınbaş University @ Istanbul, Turkey
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <span className="font-poppins text-sm font-Semibold text-white bg-gray-700 bg-opacity-50 px-2 py-0.5 rounded-full w-fit">
                    Full Time
                  </span>
                  <span className="font-poppins text-sm font-Regular text-lightContent">
                    July 2020 - Apr 2023
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
                    Sep 2013 - Sep 2018
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
