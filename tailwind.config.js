export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatWave: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
      },
      animation: {
        floatWave: "floatWave 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
