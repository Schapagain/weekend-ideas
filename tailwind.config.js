/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-color": "#eef",
      },
      transitionProperty: {
        width: "width",
        "width-height": "width, height",
      },
      minWidth: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
};
