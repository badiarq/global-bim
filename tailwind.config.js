/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "rgb(29 78 216)",
          middle: "rgb(37 99 235)",
          light: "rgb(96 165 250)",
        },
        secondary: {
          light: "rgb(254 215 170)",
          middle: "rgb(253 186 116)",
          dark: "rgb(251 146 60)"
        }
      },
			fontFamily: {
				body: ["Golos Text"]
			}
    },
  },
  plugins: [],
}