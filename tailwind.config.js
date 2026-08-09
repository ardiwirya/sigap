/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // warna utama identitas aplikasi, terinspirasi dari palet instansi pemerintahan
        navy: {
          50: '#EEF3F7',
          100: '#D6E2EB',
          200: '#AEC5D7',
          300: '#7FA3BE',
          400: '#4C7C9E',
          500: '#2C5E80',
          600: '#1E4A69',
          700: '#153A54',
          800: '#0F2B3F',
          900: '#0A1E2C',
        },
        gold: {
          50: '#FBF5E9',
          100: '#F4E4C1',
          200: '#EACD8E',
          300: '#DEB35F',
          400: '#C99A3E',
          500: '#B0812C',
          600: '#8C6521',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
