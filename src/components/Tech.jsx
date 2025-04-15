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
          className="font-poppins text-48px font-Bold text-solidHeadingDark mb-2"
        >
          My Tech Stack
        </h2>
        <p className="font-poppins text-32px font-Regular text-lightContent mb-12">
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
                className="w-24 h-24 object-contain"
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
