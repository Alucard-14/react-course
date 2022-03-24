module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        smartphone: "580px",
      },
      boxShadow: {
        expIt: "0 2px 8px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "neutral-gray": "#4b4b4b",
        "gray-txt": "#3a3a3a",
        "price-indigo": "#40005d",
      },
    },
  },
  plugins: [],
};
