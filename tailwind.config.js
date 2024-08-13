/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundTop': "url('/images/background-top.jpg')",
      },
      screens:{
        'desktop': {'min': '1000px'},
        'tablet': {'min': '851px', 'max': '999px'},
        'mobile': {'max': '850px'},
      },
    },
  },
  plugins: [],
};
