/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC143C",
        secondary: "#82017F",
        pure: "#fff",
        dark: "#333",
        flat: "#DFE6E9",
        rare: "#666",
        rapid: "#e5e5e5",
        gradient: "linear-gradient(45deg, crimson, purple)",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
