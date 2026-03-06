/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const generateScale = (max = 600) => {
  const scale = {};
  for (let i = 0; i <= max; i++) {
    scale[`s-${i}`] = `calc(var(--1) * ${i})`;
  }
  return scale;
};

const fmdsScale = generateScale();

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: fmdsScale,
      fontSize: fmdsScale,
      borderRadius: fmdsScale,
      maxWidth: {
        ...fmdsScale,
        'screen-sm': 'calc(var(--1) * 640)',
        'screen-md': 'calc(var(--1) * 768)',
        'screen-lg': 'calc(var(--1) * 1024)',
        'screen-xl': 'calc(var(--1) * 1280)',
        'screen-2xl': 'calc(var(--1) * 1536)',
      },
      minWidth: fmdsScale,
      maxHeight: fmdsScale,
      minHeight: fmdsScale,
      borderWidth: fmdsScale,
      ringWidth: fmdsScale,
      outlineWidth: fmdsScale,
      letterSpacing: fmdsScale,
      lineHeight: fmdsScale,
      // Custom breakpoints to ensure they work with FMDS logic
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {};
      // You can add more specific FMDS utilities here if needed
      addUtilities(newUtilities);
    }),
  ],
};
