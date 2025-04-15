const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '8px': '0.5rem',
        '9px': '0.5625rem',
        '10px': '0.625rem',
        '14px': '14px',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '26px': '1.625rem',
        '28px': '1.75rem',
        '32px': '2rem',
        '42px': '2.625rem',
        '48px': '3rem',
        '56px': '3.5rem',
        '58px': '3.625rem',
        '60px': '3.75rem',
        '64px': '4rem',
      },
      fontWeight: {
        'LightItalic': 300,
        'Light': 200,
        'Regular': 400,
        'Medium': 500,
        'Bold': 700,
        'Semibold': 600,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        royalBlue: "#4169e1",
        solidHeadingDark: "#CCCCCC",
        lightContent: "#A7A7A7"
      },
      screens: {
        '3xs': '256px',     // 16rem
        '2xs': '288px',     // 18rem
        'xs': '320px',      // 20rem
        'sm': '384px',      // 24rem
        'md': '448px',      // 28rem
        'lg': '512px',      // 32rem
        'xl': '576px',      // 36rem
        '2xl': '672px',     // 42rem
        '3xl': '768px',     // 48rem
        '4xl': '896px',     // 56rem
        '5xl': '1024px',    // 64rem
        '6xl': '1152px',    // 72rem
        '7xl': '1280px',    // 80rem
      },
      backgroundImage: {
        'radial-profile': 'radial-gradient(ellipse at center, rgba(146, 148, 248, 1) 0%, rgba(146, 148, 248, 0.9) 20%, rgba(146, 148, 248, 0.7) 40%, rgba(146, 148, 248, 0.4) 60%, rgba(146, 148, 248, 0.3) 80%, rgba(146, 148, 248, 0.2) 90%, rgba(146, 148, 248, 0) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addComponents }) {
      addComponents({
        // 🌟 Icon glow
        '.glow-hover': {
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid transparent',
        },
        '.glow-hover::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, transparent, rgba(146, 148, 248, 0.4), transparent)',
          transition: 'all 0.65s',
        },
        '.glow-hover:hover::before': {
          left: '100%',
        },
        '.glow-hover:hover': {
          boxShadow: '1px 1px 25px 10px rgba(146, 148, 248, 0.4)',
        },

        // 💫 Text glow
        '.glow-hover-text': {
          position: 'relative',
          color: 'white',
          transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
        },
        '.glow-hover-text:hover': {
          color: '#9294F8',
          textShadow: '0 0 5px #9294F8, 0 0 10px #9294F8',
        },

        // 🔥 Replaced with gradient class
        '.active-glow': {
          background: 'linear-gradient(to right, #c084fc, #6366f1)', // purple-400 to indigo-500
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      });
    }),
  ],
}
