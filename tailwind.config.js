/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "dark-des-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        body: ["Kumbh Sans"],
      },
    },
  },
  plugins: [],
};
