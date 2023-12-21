/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        color1: "#F1F5F8",
      },
      width: {
        w1: "150px",
        w2: "80%",
        w3: "620px",
      },
      height: {
        h1: "150px",
      },
      fontFamily: {
        family1: "roboto",
      },
      borderRadius: {
        radius1: "50%",
      },
    },
  },
  plugins: [],
};
