/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primaryBlue: "#3B82F6",
        secondaryIndigo: "#6366F1",
        primaryRed: "#EF4444",
        secondaryOrange: "#F97316",
      },

      fontFamily: {
        inter: "Inter",
        logo: "Oxanium",
      },
    },
  },
  plugins: [require("daisyui")],
};
