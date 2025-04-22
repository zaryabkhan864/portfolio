import React from "react";
import img1 from "../images/1.svg";
import img2 from "../images/2.svg";
import img3 from "../images/3.svg";
import img4 from "../images/4.svg";
import img5 from "../images/5.svg";
import img6 from "../images/6.svg";
import img7 from "../images/7.svg";
import img8 from "../images/8.svg";

const techStack = [
  { src: img1, alt: "HTML5 Logo" },
  { src: img2, alt: "CSS3 Logo" },
  { src: img3, alt: "JavaScript Logo" },
  { src: img4, alt: "React Logo" },
  { src: img5, alt: "Redux Logo" },
  { src: img6, alt: "Bootstrap Logo" },
  { src: img7, alt: "GitHub Logo" },
  { src: img8, alt: "VSCode Logo" },
];

const Tech = () => {
  return (
    <section
      id="tech-stack"
      className="bg-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-8"

    >
      <div className="max-w-5xl mx-auto text-center"      
       aria-labelledby="tech-stack-heading"
      data-aos="fade-up">
        <h2
          id="tech-stack-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-Bold text-solidHeadingDark mb-2"
        >
          My Tech Stack
        </h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-poppins font-Regular text-lightContent mb-12">
          Technologies I’ve been working with recently
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="w-1/4 sm:w-1/5 md:w-1/6 flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={tech.src}
                alt={tech.alt}
                className="
                w-14  h-14
                sm:w-16 sm:h-16
                md:w-20 md:h-20 
                lg:w-24 lg:h-24
                object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
