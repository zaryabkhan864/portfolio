import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import cc1 from '../images/cc1.png'
import cc2 from '../images/cc2.png'
import cc3 from '../images/cc3.png'
import cc4 from '../images/cc4.jpg'

const Certificates = () => {
  const handleDragStart = (e) => e.preventDefault()

  const items = [
    <div
      key="1"
      className="p-4 md:p-6 lg:p-8 w-full h-full flex justify-center"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[6px] rounded-2xl shadow-xl">
        <img
          src={cc1}
          alt="React and Redux Certificate"
          onDragStart={handleDragStart}
          role="presentation"
          className="rounded-xl object-contain w-full max-w-[400px] h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>,
    <div
      key="2"
      className="p-4 md:p-6 lg:p-8 w-full h-full flex justify-center"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[6px] rounded-2xl shadow-xl">
        <img
          src={cc2}
          alt="Programming with Python Certificate"
          onDragStart={handleDragStart}
          role="presentation"
          className="rounded-xl object-contain w-full max-w-[400px] h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>,
    <div
      key="3"
      className="p-4 md:p-6 lg:p-8 w-full h-full flex justify-center"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[6px] rounded-2xl shadow-xl">
        <img
          src={cc3}
          alt="Managing Big Data with MySQL Certificate"
          onDragStart={handleDragStart}
          role="presentation"
          className="rounded-xl object-contain w-full max-w-[400px] h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>,
     <div
     key="4"
     className="p-4 md:p-6 lg:p-8 w-full h-full flex justify-center"
     data-aos="zoom-in"
     data-aos-delay="300"
   >
     <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[6px] rounded-2xl shadow-xl">
       <img
         src={cc4}
         alt="Managing Big Data with MySQL Certificate"
         onDragStart={handleDragStart}
         role="presentation"
         className="rounded-xl object-contain w-full max-w-[400px] h-auto transition-transform duration-300 hover:scale-105"
       />
     </div>
   </div>,
  ]
  
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <section
      id="certificates"
      className="bg-neutral-900 text-white py-16 px-4 md:px-12 lg:px-24 text-center"
      aria-label="Certificates Section"
    >
      <div data-aos="fade-up">
        <h2  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-Bold text-solidHeadingDark mb-2">Certificates</h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-poppins font-Regular text-lightContent mb-12">
          Some of the certifications I’ve earned
        </p>

        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
        />
      </div>
    </section>
  )
}

export default Certificates
