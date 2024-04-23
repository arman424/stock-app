/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scarlet: {
          50: "#fff3ed",
          100: "#ffe4d4",
          200: "#ffc5a8",
          300: "#ff9c71",
          400: "#ff6838",
          500: "#fe3d0d",
          600: "#ef2507",
          700: "#c61708",
          800: "#9d140f",
          900: "#7e1510",
          950: "#440606",
        },
      },
    },
  },
  plugins: [],
};
