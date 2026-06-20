/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50:  '#EFE6D6',
          100: '#D9CAB6',
          200: '#C9BBA6',
          300: '#B6A893',
          400: '#9c8d7c',
          500: '#7d6a52',
          600: '#6f5e49',
        },
        gold: {
          300: '#F8BE1C',
          400: '#F0AE1E',
          600: '#C98A2B',
        },
        rasta: {
          red:   '#7A2420',
          gold:  '#C98A2B',
          green: '#46502E',
        },
        surface: {
          DEFAULT:        '#1C1411',
          1:              '#19120F',
          2:              '#140D0A',
          card:           '#1F1610',
          input:          '#1A120D',
          'input-filled': '#221913',
          'input-focus':  '#271d16',
        },
      },
      fontFamily: {
        sans:  ['Hanken Grotesk', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono:  ['SF Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      borderRadius: {
        sharp: '2px',
        card:  '3px',
      },
    },
  },
  plugins: [],
}