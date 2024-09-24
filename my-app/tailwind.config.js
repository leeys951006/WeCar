// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        96: '24rem',
      },
    },
  },
  plugins: [],
};
