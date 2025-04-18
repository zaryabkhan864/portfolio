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
          <h1 className="text-xs 3xs:text-sm  2xs:text-lg xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">Hi 👋</h1>
          <h2 className="text-xs 3xs:text-sm  2xs:text-lg xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">My name is</h2>

          <h3 className="text-xs 3xs:text-sm   2xs:text-lg xs:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-500">
            M Zaryab Khan
          </h3>

          <p className="text-xs 3xs:text-xs  2xs:text-xs xs:text-sm sm:text-sm md:text-md lg:text-xl xl:text-xl font-medium">
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
          top-28 right-2 bottom-80
          3xs:top-24 3xs:right-2 3xs:bottom-80
          2xs:top-28 2xs:right-4 2xs:bottom-72
          xs:top-28 xs:right-6 xs:bottom-72
          sm:top-32 sm:right-4 sm:bottom-64
          md:top-32 md:right-4 md:bottom-64
           lg:top-28 lg:right-6 lg:bottom-64
          xl:top-32 xl:right-8 xl:bottom-56
          2xl:top-36 2xl:right-16 2xl:bottom-48
          3xl:top-60 3xl:right-34 3xl:bottom-16
           4xl:top-56 4xl:right-20 4xl:bottom-20
          5xl:top-52 5xl:right-20 5xl:bottom-30
          6xl:top-52 6xl:right-32 6xl:bottom-28
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
            className="w-20 h-20
            3xs:w-24 3xs:h-24
              2xs:w-28 2xs:h-28 
            xs:w-28 xs:h-28 
            sm:w-32 sm:h-32 
            md:w-32 md:h-32 
            lg:w-36 lg:h-36 

            xl:w-40 xl:h-40
            2xl:w-44 2xl:h-44
            3xl:w-52 3xl:h-52
            4xl:w-52 4xl:h-52
            5xl:w-56 5xl:h-56            
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
