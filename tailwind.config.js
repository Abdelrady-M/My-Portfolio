/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#0a192f"
      },
      backgroundImage: {
        site: "#0a192f",
        about: "url('./public/about.png')",
        service: "url('./public/work-steps.png')",
      }
    },
    fontFamily: {
      primary: "poppins",
      secondary: "Roboto",
    },
    container: {
      padding: {
        DEFAULT: "15px"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
  },
  plugins: [],
}

