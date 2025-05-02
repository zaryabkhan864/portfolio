import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../images/11.png'
import FloatingUsers from '../animations/FloatingUsers ';


const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({
    show: false,
    type: '', // 'success' or 'error'
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'portfolio', // Replace with your EmailJS service ID
      'template_89yi8mm', // Replace with your EmailJS template ID
      form.current,
      'iQ4ye1guCccqND7C_' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setNotification({
        show: true,
        type: 'success',
        message: 'Message sent successfully!'
      });
      form.current.reset();
      
      // Hide notification after 4 seconds
      setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 4000);
    }, (error) => {
      console.log(error.text);
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send the message, please try again.'
      });
      
      // Hide notification after 4 seconds
      setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 4000);
    });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-16 bg-neutral-900 text-white relative"
      aria-label="Contact Section"
    >
      {/* Notification Overlay */}
      {notification.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className={`p-6 rounded-lg shadow-xl transform transition-all duration-300 ${notification.type === 'success' ? 'bg-sky-950' : 'bg-red-600'} text-white max-w-md w-full mx-4`}>
            <div className="flex flex-col items-center">
              <svg
                className={`w-16 h-16 mb-4 ${notification.type === 'success' ? 'text-green-200' : 'text-red-200'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {notification.type === 'success' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )}
              </svg>
              <h3 className="text-xl font-bold mb-2">
                {notification.type === 'success' ? 'Success!' : 'Error!'}
              </h3>
              <p className="text-center">{notification.message}</p>
              <button
                onClick={() => setNotification({ show: false, type: '', message: '' })}
                className="mt-4 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-Bold text-solidHeadingDark mb-2">
            Contact Me
          </h2>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-poppins font-Regular text-lightContent mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2">
          {/* Contact Form */}
          <div
            className="ps-2 xl:ps-3 xl:pe-0 2xl:p-4 md:p-10 bg-gradient-to-r from-black to-zinc-800 shadow-lg font-poppins rounded-bl-2xl"
            aria-label="Contact Form Container"
          >
            <form ref={form} onSubmit={sendEmail}>
              <fieldset>
                <legend className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-xl 2xl:text-3xl   font-poppins font-Bold mb-4">Contact Form</legend>

                <div className="mb-4">
                  <label htmlFor="name" className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-sm 2xl:text-lg 3xl:text-lg 4xl:text-xl  font-poppins font-Regular block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Your Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-sm 2xl:text-lg 3xl:text-lg 4xl:text-xl font-poppins block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Email Address"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    We'll never share your email with anyone else.
                  </p>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-sm 2xl:text-lg 3xl:text-lg 4xl:text-xl font-poppins block mb-1">
                    Write Your Messages
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Write Your Message"
                    required
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
          <div className="ps-2 2xl:p-4 bg-gradient-to-l from-black to-zinc-800 shadow-lg rounded-br-2xl rounded-tr-2xl flex flex-col items-center justify-center gap-6">
            <FloatingUsers/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
