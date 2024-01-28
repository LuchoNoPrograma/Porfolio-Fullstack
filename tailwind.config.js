const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      scale: {
        105: "1.05",
        110: "1.10",
      },
      colors: {
        ...colors,
        emerald: {
          ...colors.emerald,
          850: "rgba(47,134,94,0.47)",
          600: "#41a275",
          400: "#42b883", //#primary vue color
          300: "#4dc58e",
          200: "#5df8b1",
        },
        cyan: {
          ...colors.cyan,
          100: "#a9e7f5",
          900: "#35495e", //#secondary vue color
          850: "rgba(111,163,220,0.21)",
          750: "rgba(91,195,239,0.47)",
        },

        slate: {
          ...colors.slate,
          800: "#201e29",
        },
      },
    },
  },
  plugins: [],
};
