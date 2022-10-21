/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {

    /* Color palette from https://colorhunt.co
       and some from https://colorpalettes.earth/
    */
    colors: {
      "header-color": "#FFFFFF",
      "logo-color": "#58585A",
      "hover-color": "#30AADD",
      "text-color": "#393E46",
      "grid-color": "#393E46",
      "test-color": "#F8F8F8",
      "back": "#CAF0F8",
      
      
      /* F7F7F7*/
    },
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}