/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#3f3365",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
