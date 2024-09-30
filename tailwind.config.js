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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: '#09071F',
        lightblue: '#95AFC0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }, // Add a closing brace here
    }, // Close the extend object here
  },
  plugins: [],
};
