/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        sm: ['13.3px', '16px'],
        base: ['16px', '16px'],
        lg: ['19.2px', '24px'],
        xl: ['23.04px', '24px'],
        '2xl': ['27px', '32px'],
        '3xl': ['33px', '40px'],
        '4xl': ['40px', '40px'],
        '5xl': ['48px', '48px']
      },
      colors: {
        'b-100':"#E5EDF9",
        'b-200':"#C6D9F1",
        'b-300':"#94BBE5",
        'b-400':"#5A97D6",
        'b-500':"#357AC2",
        'b-600':"#2867B1",
        'b-700':"#1F4D85",
        'b-800':"#1D426F",
        'b-900':"#1D385D",
        'b-950':"102341",
        'b':"#1857A1",
        'g-100':"#E4F6E2",
        'g-200':"#C8EDC5",
        'g-300':"#9DDD98",
        'g-400':"#6BC464",
        'g-500':"#4CB944",
        'g-600':"#358B2E",
        'g-700':"#2B6E27",
        'g-800':"#275724",
        'g-900':"#21481F",
        'r-100':"#FFE3E1",
        'r-200':"#FFCDC9",
        'r-300':"#FEA9A3",
        'r-400':"#FB776E",
        'r-500':"#F2392C",
        'r-600':"#E02E22",
        'r-700':"#BD2318",
        'r-800':"#9C2118",
        'r-900':"#81221B",
        'whitebg':"#F3F8FF"
      },
    },
  },
  plugins: []
}