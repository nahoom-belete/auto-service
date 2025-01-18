/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "primary": "#FA7436",
        "success": "#372B4F",  
      },
      backgroundColor: {
        "primary": "#D1E8E2",
      },
      borderColor: {
        "myprimary": "#116466"
      }
    }
  },
  plugins: [],
}

