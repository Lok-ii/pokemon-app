/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#C5312A",
        gray: "#575757",
        lightGray: "#D4D4D4",
      },
      backgroundImage: {
        redAndWhite: "linear-gradient(#C5312A 50%, white 50%)",
      },
      fontFamily: {
        inglobal: "'inglobal', sans-serif;",
        archive: "'Archive', sans-serif;",
      },
    },
  },
  plugins: [],
};
