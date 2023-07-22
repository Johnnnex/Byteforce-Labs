/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./reusable-components/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    extend: {
      fontFamily : {
        poppins: ['Poppins', "sans-serif"],
        robotoMono: ['Roboto Mono', "monospace"]
      },
    },
  },
  plugins: [],
}

