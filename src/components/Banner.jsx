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
          <h1 className="text-4xl 2xs:text-lg xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">Hi 👋</h1>
          <h2 className="text-2xl 2xs:text-lg xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">My name is</h2>

          <h3 className="text-3xl 2xs:text-lg xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-500">
            M Zaryab Khan
          </h3>

          <p className="text-xl 2xs:text-xs xs:text-sm sm:text-sm md:text-xl lg:text-xl xl:text-xl font-medium">
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
          2xs:top-36 2xs:right-4 2xs:bottom-20
          xs:top-32 xs:right-6 xs:bottom-24
          sm:top-32 sm:right-10 sm:bottom-24
          md:top-24 md:right-2 md:bottom-24
           lg:top-32 lg:right-10 lg:bottom-24
          xl:top-32 xl:right-5 xl:bottom-20
          2xl:top-32 2xl:right-16 2xl:bottom-16
          3xl:top-56 3xl:right-20 3xl:bottom-12
           4xl:top-56 4xl:right-24 4xl:bottom-8
          5xl:top-56 5xl:right-40 5xl:bottom-4
          6xl:top-48 6xl:right-32 6xl:bottom-32
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
              2xs:w-24 2xs:h-24 
            xs:w-28 xs:h-28 
            sm:w-28 sm:h-28 
            md:w-36 md:h-36 
            lg:w-32 lg:h-32 
            xl:w-40 xl:h-40
            2xl:w-44 2xl:h-44
            3xl:w-52 3xl:h-52
            4xl:w-56 4xl:h-56
            5xl:w-60 5xl:h-60            
            6xl:w-[100%] 6xl:h-[100%]
            7xl:w-[100%] 7xl:h-[100%]
            8xl:w-[100%] 8xl:h-[100%]
            rounded-full shadow-lg"
          />
        </div>
      </div>

    </section>

  )
}

export default Banner
