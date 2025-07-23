/** @type {import('tailwindcss').Config} */
export default {
  content: ["./ index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '2sm': '320px',
        // => @media (min-width: 320px) { ... }
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '2560px',
      },
      colors: {
        primary: '#efefef', // white-100
        'text-primary': '#292929',  // white-950
        'text-secondary': '#7c7c7c',  // white-500
        'accent-primary': '#ff9a00',  // amber-500
        'accent-secondary': '#bb4e02',  // amber-700
      },
      transitionProperty: {
        'menu': 'opacity, transform',
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeSlideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.6s ease-out both'
      },
      plugins: [],
    }
  }
}
