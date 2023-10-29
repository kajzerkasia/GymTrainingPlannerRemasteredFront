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
        header: ['"Playpen Sans"', 'cursive']
      },
      colors: {
        'pink': '#ff6dec',
        'cyan': '#27fff1',
        'violet': '#8964b0'
      },
    },

  },
  plugins: [],
}

