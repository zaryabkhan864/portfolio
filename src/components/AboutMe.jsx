import React from "react";
import { motion } from "framer-motion";
import WE_BG from "../images/workexperience_background.png";

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
  const experienceData = [
    {
      role: "Software Engineer",
      company: "Digiteaz",
      location: "Karachi, Pakistan",
      type: "Full Time",
      date: "Sep 2021 - Dec 2021",
    },
    {
      role: "Service desk officer",
      company: "Tabba Heart Hospital",
      location: "Karachi, Pakistan",
      type: "Internship",
      date: "Sep 2021 - Dec 2021",
    },
    {
      role: "Software Developer Intern",
      company: "Dubai Islamic bank ",
      location: "Karachi, Pakistan",
      type: "Internship",
      date: "Sep 2021 - Dec 2021",
    },
    {
      role: "Software Developer Intern",
      company: "Qasim International Container Terminal (QICT)",
      location: "Karachi, Pakistan",
      type: "Internship",
      date: "Sep 2021 - Dec 2021",
    },
    {
      role: "Software Developer Intern",
      company: "Excloud",
      location: "Karachi, Pakistan",
      type: "Internship",
      date: "Sep 2021 - Dec 2021",
    },
  ];

  return (
    <section
    id="about-me"
    className="relative bg-center bg-no-repeat bg-fixed bg-cover text-white py-20 px-4 sm:px-6 lg:px-8"
    style={{
      backgroundImage: `url(${WE_BG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'scroll', // Test this instead of 'fixed' on mobile
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
            The Generator App is an online tool that helps you to export ready-made
            templates ready to work as your future website. It helps you to combine
            slides, panels and other components and export it as a set of static files:
            HTML/CSS/JS.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div variants={fadeUp} className="space-y-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-Bold text-white mb-6">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experienceData.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp}>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="mb-2 md:mb-0">
                    <h3 className="font-poppins text-sm sm:text-md md:text-lg lg:text-xl font-Regular text-white">
                      {item.role}
                    </h3>
                    <p className="font-poppins text-xs md:text-sm xl:text-md font-Regular text-lightContent">
                      {item.company} @ {item.location}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="font-poppins text-sm font-Semibold text-white bg-gray-700 bg-opacity-50 px-2 py-0.5 rounded-full w-fit">
                      {item.type}
                    </span>
                    <span className="font-poppins text-sm font-Regular text-lightContent">
                      {item.date}
                    </span>
                  </div>
                </div>
                {i !== experienceData.length - 1 && (
                  <hr className="my-4 border-gray-400 border-opacity-30" />
                )}
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
