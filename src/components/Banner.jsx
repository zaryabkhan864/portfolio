import React, { useEffect, useRef, useState } from 'react'
import Profile_Image from '../images/profile_image.png'
import Banner_Image from '../images/banner.png'
import Banner_Image_Mobile from '../images/banner-mobile.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simulate parallax on mobile
  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const offset = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${offset * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section
      id="home"
      className={`min-h-screen w-full text-white px-6 md:px-16 flex items-center justify-center relative overflow-hidden`}
    >
      {/* Background Layer */}
      <div
        ref={parallaxRef}
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 ${!isMobile ? 'bg-fixed' : ''}`}
        style={{
          backgroundImage: `url(${isMobile ? Banner_Image_Mobile : Banner_Image})`,
        }}
      ></div>

      {/* Content Layer */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between z-10 py-16 relative">
        {/* Text + Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full md:w-1/2 lg:w-2/3 space-y-3 md:space-y-4 md:text-left"
        >
          <h1 className="text-md sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-poppins font-semibold">Hi 👋</h1>
          <h2 className="text-md sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-poppins font-semibold">My name is</h2>
          <h3 className="text-md sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-500">
            M Zaryab Khan
          </h3>

          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-poppins font-semibold text-base">
            <TypeAnimation
              sequence={[
                'I build things for the web',
                1000,
                'I design and develop user interfaces',
                1000,
                'I love React and Tailwind CSS',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </p>
        </motion.div>

        {/* Desktop Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block relative"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(146, 148, 248, 1) 0%, rgba(146, 148, 248, 0.9) 20%, rgba(146, 148, 248, 0.7) 40%, rgba(146, 148, 248, 0.4) 60%, rgba(146, 148, 248, 0.3) 80%, rgba(146, 148, 248, 0.2) 90%, rgba(146, 148, 248, 0) 100%)',
            borderRadius: '50%',
            width: 'fit-content',
            height: 'fit-content',
            padding: '0rem',
            marginLeft: '2rem',
          }}
        >
          <img
            src={Profile_Image}
            alt="M Zaryab Khan"
            className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full shadow-lg object-cover"
          />
        </motion.div>

        {/* Mobile Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:hidden mt-8"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(146, 148, 248, 1) 0%, rgba(146, 148, 248, 0.9) 20%, rgba(146, 148, 248, 0.7) 40%, rgba(146, 148, 248, 0.4) 60%, rgba(146, 148, 248, 0.3) 80%, rgba(146, 148, 248, 0.2) 90%, rgba(146, 148, 248, 0) 100%)',
            borderRadius: '50%',
            width: 'fit-content',
            height: 'fit-content',
            margin: '0 auto',
          }}
        >
          <img
            src={Profile_Image}
            alt="M Zaryab Khan"
            className="w-32 h-32 rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner
