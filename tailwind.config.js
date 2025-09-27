// book-finder-alex/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 🚨 UPDATE THIS 'content' ARRAY 🚨
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}