/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text1: "#F5F5F5",
        text2: "#D2DBDE",
        text3: "#A1A7AA",
        textAction: "#BE185D",
        textAction2: "#00D6D6",
        surface1: "#1e293b",
        surface2: "#475569",
        surface3: "#cbd5e1",
        surface4: "#fffff3",

        callAction: "#0EA5E9",
        surfaceShadow: "#363A3C",
        shadowStrength: 0.8,
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
