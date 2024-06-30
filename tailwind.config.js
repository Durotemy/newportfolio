/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        dark:'#0D0D0D',
        lightDark:'#111111',
        light:'#FFFFFF'
      },
    },
    fontSize: {
      sm: "0.85rem",
      md:"0.95",
      base: "1rem",
      basetext: "1.1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    
    fontFamily: { 
      lato: ['Lato', 'sans-serif'] 
      
  } 
  },
  plugins: [],
};
