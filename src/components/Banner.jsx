import React, { useEffect, useState } from 'react'
import Profile_Image from '../images/profile_image.png'
import Banner_Image from '../images/banner.png'
import Banner_Image_Mobile from '../images/banner-mobile.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState(Banner_Image)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(Banner_Image_Mobile)
      } else {
        setBackgroundImage(Banner_Image)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen w-full text-white px-6 sm:px-9 md:px-10 lg:px-11 xl:px-16 2xl:px-16 3xl:px-16 4xl:px-16 flex items-center justify-center relative bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll'
      }}
    >
      <div className="w-full max-w-6xl flex flex-col xs:flex-row sm:flex-row md:flex-row items-center justify-between z-10 py-16">
        {/* Text + Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full md:w-1/2 lg:w-2/3 space-y-3 md:space-y-4  text-center xs:text-left"
        >
          <h1 className="text-md xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-poppins font-semibold">Hi 👋</h1>
          <h2 className="text-md xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl font-poppins font-semibold">My name is</h2>
          <h3 className="text-md xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-500">
            M Zaryab Khan
          </h3>
          <p className="text-base xs:text-md sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-poppins font-semibold ">
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

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-10 md:mt-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(146, 148, 248, 1) 0%, rgba(146, 148, 248, 0.9) 20%, rgba(146, 148, 248, 0.7) 40%, rgba(146, 148, 248, 0.4) 60%, rgba(146, 148, 248, 0.3) 80%, rgba(146, 148, 248, 0.2) 90%, rgba(146, 148, 248, 0) 100%)',
            borderRadius: '50%',
            width: 'fit-content',
            height: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <img
            src={Profile_Image}
            alt="M Zaryab Khan"
            className="w-32 h-32 xs:w-56 xs:h-32 sm:w-64 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-40 xl:w-36 xl:h-36 2xl:w-56 2xl:h-52 3xl:w-52 3xl:h-52 rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}


export default Banner
