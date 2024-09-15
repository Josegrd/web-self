/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        yellowtail: ["Yellowtail", "cursive"],
      },
    },
  },
  plugins: [],
};
