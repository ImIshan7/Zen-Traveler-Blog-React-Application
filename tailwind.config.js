/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        zen: {
          primary: '#0077B6',    // Ocean Blue
          secondary: '#FF6F61',  // Sunset Coral
          accent: '#E9C46A',     // Golden Yellow
          green: '#2A9D8F',      // Forest Green
          sand: '#F4A261',       // Sand Beige
          lavender: '#A8DADC',   // Soft Lavender
          light: '#F1FAEE',      // Off-White
          dark: '#264653',       // Charcoal Gray
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#264653',
            a: {
              color: '#0077B6',
              '&:hover': {
                color: '#A8DADC',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}