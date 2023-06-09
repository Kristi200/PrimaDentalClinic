/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto Condensed', 'sans-serif']
    },
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px','max': '991px'},
      'lg': {'min': '992px'}
    },
    extend: {},
  },
  plugins: [
    function({addVariant}){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover')
    }
  ],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
}