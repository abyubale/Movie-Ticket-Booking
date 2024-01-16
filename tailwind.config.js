/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        showtimeBg: "#F5F9FE",
        timeBtnBg: "#00B8F5",
        booked: "#C2C5C9",
      },
    },
  },
  plugins: [],
};
