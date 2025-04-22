import React from "react";
import { FaGithub, FaCode } from 'react-icons/fa';
import P_BG from '../images/projects_background.png'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import Slider from "react-slick";
const projects = [
  {
    title: "School Management System",
    description:
      "SMS is developed on Oracle 9i. It includes modules for student registration, teacher’s registration, academic modules, finance modules, and reporting of student grades, attendance, and fees voucher.",
    techStack: "HTML, JavaScript, SASS, React",
    image: p1,
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "SnipHub",
    description:
      "React-based NFT application with Landing Page, Login, NFT collections Pages, Target Price Page, Watchlist.",
    techStack: "HTML, JavaScript, SASS, React",
    image: p2,
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "NFT Market",
    description:
      "NFT Market is a React-based landing page having mobile responsiveness, using Bootstrap 5.2.0, owlcarousel, react-countup, react-slick, react-dom, and AOS.",
    techStack: "HTML, JavaScript, SASS, React",
    image: p3,
    liveLink: "#",
    codeLink: "#",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false, // hide left/right buttons
  autoplay: true, // auto slide
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed text-white px-8 md:px-16 py-24"
      style={{
        backgroundImage: `url(${P_BG})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="relative z-10 py-16 px-2 md:px-10">
        <div className="max-w-6xl mx-auto text-white text-center">
          <h2         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-Bold text-solidHeadingDark mb-2">Recent Projects</h2>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-poppins font-Regular text-lightContent mb-12">
            Technologies I've been working with recently
          </p>

          <Slider {...sliderSettings} className="px-2">
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-2xl transition-all duration-300 flex flex-col h-[540px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="font-poppins font-medium text-md sm:text-lg md:text-xl lg:text-2xl  mb-2 text-left">{project.title}</h3>
                      <p className="font-poppins text-xs sm:text-sm md:text-md lg:text-lg font-light mb-4 text-left line-clamp-4 ">
                        {project.description}
                      </p>
                      <p className="text-sm font-medium text-gray-300 mb-4 text-left">
                        <span className="text-white font-poppins text-sm font-light">Tech stack:</span> {project.techStack}
                      </p>
                    </div>
                    <div className="flex justify-between font-poppins text-16px font-Regular items-center pt-4 border-t border-gray-700 mt-auto">
                      <a
                        href={project.liveLink}
                        className="flex items-center gap-2 text-white text-xs hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaCode className="text-lg" />
                        Live Preview
                      </a>
                      <a
                        href={project.codeLink}
                        className="flex items-center gap-2 text-white text-xs hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-lg" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;