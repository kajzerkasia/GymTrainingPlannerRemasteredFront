/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Roboto Flex"'],
        header: ['"Playpen Sans"', 'cursive'],
        button: ['"Caprasimo"', 'cursive']
      },
      colors: {
        'pink': '#ff6dec',
        'cyan': '#27fff1',
        'lighter-violet': '#a579d4',
        'violet': '#8964b0',
        'darker-violet': '#673599',
        'almost-white': '#ebe7ef',
      },
    },

  },
  plugins: [],
}

