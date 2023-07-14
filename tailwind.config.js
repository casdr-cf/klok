/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "klok-fg": "hsl(205 100% 9%)",
        "klok-bg": "hsl(0 0% 96%)",
      },
    },
  },
  plugins: [],
};
