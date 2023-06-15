/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/images/bg-desktop.svg')",
        mobile: "url('/images/bg-mobile.svg')",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
