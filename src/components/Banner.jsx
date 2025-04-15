import React from 'react'
import Profile_Image from '../images/profile_image.png'
import Banner_Image from '../images/banner.png'
// import Banner_Image from '../images/bg_video1.gif'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat text-white 
  px-6 md:px-16 pt-32 pb-16 
  flex flex-col justify-start relative "
      style={{
        backgroundImage: `url(${Banner_Image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Animated Main Text Content */}
      <div className='flex  items-start  h-full 3xl:pt-28'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className=" max-w-xl space-y-3 z-10 font-poppins"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Hi 👋</h1>
          <h2 className="text-2xl md:text-4xl font-semibold">My name is</h2>

          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-500">
            M Zaryab Khan
          </h3>

          <p className="text-xl md:text-2xl font-medium">
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
        {/* Desktop Image */}
        <div
          className=" absolute
          top-10 right-0 bottom-0
          3xs:top-0 3xs:right-0 3xs:bottom-0
          2xs:top-0 2xs:right-0 2xs:bottom-0
          xs:top-96 xs:right-20 xs:bottom-14
          sm:top-96 sm:right-20 sm:bottom-64
          md:top-10 md:right-0 md:bottom-0
           lg:top-96 lg:right-32 lg:bottom-12
          xl:top-60 xl:right-0 xl:bottom-0
          2xl:top-96 2xl:right-40 2xl:bottom-12
          3xl:top-[70vw] 3xl:right-64 3xl:bottom-[26vw]
           4xl:top-[40%] 4xl:right-72 4xl:bottom-[30%]
          5xl:top-[40%] 5xl:right-72 5xl:bottom-[30%]
          6xl:top-0 6xl:right-0 6xl:bottom-0
          7xl:top-48 7xl:right-32 7xl:bottom-32
          8xl:top-0 8xl:right-0 8xl:bottom-0

           z-10"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(146, 148, 248, 1) 0%, rgba(146, 148, 248, 0.9) 20%, rgba(146, 148, 248, 0.7) 40%, rgba(146, 148, 248, 0.4) 60%, rgba(146, 148, 248, 0.3) 80%, rgba(146, 148, 248, 0.2) 90%, rgba(146, 148, 248, 0) 100%)',
            borderRadius: '50%',
          }}
        >
          <img
            src={Profile_Image}
            alt="M Zaryab Khan"
            className="w-44 h-44
            xs:w-56 xs:h-56 
            sm:w-64 sm:h-64 
            md:w-64 md:h-64 
            lg:w-72 lg:h-72 
               4xl:w-[100%] 4xl:h-[100%]
            5xl:w-[100%] 5xl:h-[100%]
            rounded-full shadow-lg"
          />
        </div>
      </div>

    </section>

  )
}

export default Banner
