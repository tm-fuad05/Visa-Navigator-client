/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {},

      fontFamily: {
        inter: "Inter",
        logo: "Oxanium",
      },
    },
  },
  plugins: [require("daisyui")],
};
