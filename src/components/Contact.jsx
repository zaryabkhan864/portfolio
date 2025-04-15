import React from 'react'
import contactImg from '../images/11.png'
import { motion } from 'framer-motion'
import FloatingUsers from '../animations/FloatingUsers ';

const users = [
  {
    username: "@brook_sim",
    eth: "4.78 ETH",
    items: 206,
    collections: 12,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    username: "@marvinmckin",
    eth: "7.55 ETH",
    items: 479,
    collections: 24,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    username: "@esther_howard",
    eth: "5.31 ETH",
    items: 387,
    collections: 10,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    username: "@brook_sim",
    eth: "3.14 ETH",
    items: 24,
    collections: 4,
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-16 bg-neutral-900 text-white"
      aria-label="Contact Section"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-48px font-Bold text-solidHeadingDark mb-2">
            Contact Me
          </h2>
          <p className="font-poppins text-32px font-Regular text-lightContent mb-12">
            For any questions please mail us:
          </p>
        </div>

        <div className="w-full">
          <img
            src={contactImg}
            alt="envelope header"
            className="me-auto max-w-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            className="p-6 md:p-10 bg-gradient-to-r from-black to-zinc-800 shadow-lg font-poppins rounded-bl-2xl"
            aria-label="Contact Form Container"
          >
            <form>
              <fieldset>
                <legend className="text-xl font-semibold mb-4">Contact Form</legend>

                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Email Address"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    We'll never share your email with anyone else.
                  </p>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-1">
                    Write Your Messages
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Write Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="relative overflow-hidden w-full py-2 rounded text-white border border-[rgba(146,148,248,0.4)] bg-transparent hover:shadow-[1px_1px_25px_10px_rgba(146,148,248,0.4)] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[linear-gradient(120deg,transparent,rgba(146,148,248,0.4),transparent)] before:transition-all before:duration-[650ms] hover:before:left-full"
                  aria-label="Submit"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>

          {/* Animated User Cards */}
          <div className="p-6 bg-gradient-to-l from-black to-zinc-800 shadow-lg rounded-br-2xl rounded-tr-2xl flex flex-col items-center justify-center gap-6">
           <FloatingUsers/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
