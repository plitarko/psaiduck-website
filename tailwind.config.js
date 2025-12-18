/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'psaiduck': {
          purple: '#8D5AD9',
          'purple-light': '#A673E6',
          'purple-dark': '#6B3FA0',
          dark: '#1a1a2e',
          'dark-lighter': '#252542'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
