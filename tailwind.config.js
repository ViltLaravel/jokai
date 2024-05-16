/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acme: ['Acme'],
        poppins: ['Poppins']
      },
      fontWeight: {
        acmes: 400,
        poppin: {
          sm: 300,
          md: 400,
          lg: 500
        }
      }
    },
  },
  plugins: [],
}

