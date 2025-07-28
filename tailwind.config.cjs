/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
extend: {
  colors: {
    dark_primary: "#1E1E1E",
    bg_light_primary: "#2C2C2C",
    accent: "#FF7847",
    gray_custom: "#B7B7B7",
    slate_text: "#F5F5F5",
  },
  backgroundImage: {
    primaryLinear: "linear-gradient(180deg, #2C2C2C 0%, #1E1E1E 100%)",
  },
  dropShadow: {
    primary: "-5px 35px 40px rgba(0, 0, 0, 0.6)",
  },
},

  },
  plugins: [],
};
