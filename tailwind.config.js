/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0B7DB7',
        'custom-green': '#34A35E',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #0B7DB7 0%, #34A35E 100%)',
        'custom-gradient-r': 'linear-gradient(90deg, #0B7DB7 0%, #34A35E 100%)',
        'custom-gradient-br': 'linear-gradient(135deg, #0B7DB7 0%, #34A35E 100%)',
        'custom-gradient-overlay': 'linear-gradient(90deg, rgba(11, 125, 183, 0.8) 0%, rgba(52, 163, 94, 0.7) 50%, rgba(11, 125, 183, 0.8) 100%)',
      },
    },
  },
  plugins: [],
};
