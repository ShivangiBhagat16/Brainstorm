/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      transparent: "transparent",
      current: "currentColor",
      "dark-grey": "#4b4b4b",
      base: "#cccccc",
      heading: "#868686",
    },
  },
  plugins: [],
};
