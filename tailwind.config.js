/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('assets/images/banner2.jfif')",
        footer: "url('assets/images/footerBg.jpg')",
      },
      fontFamily: {
        primary: ["Hatton"],
      },
      gridTemplateColumns: {
        custom: "repeat(1, 65% 1fr)",
        customOposite: "repeat(1, 1fr 65%)",
      },
      screens: {
        custom1200: "1200px",
        custom1650: "1650px",
        custom1080: "1080px",
        navBreak: "1000px",
      },
    },
  },
  plugins: [],
};
