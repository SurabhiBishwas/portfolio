/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coder Girl Theme Colors
        'soft-yellow': '#FFD700',      // Soft yellow
        'dark-yellow': '#FFB300',      // Dark yellow
        'vibrant-green': '#00C853',    // Vibrant green
        'soft-pink': '#FFB6C1',        // Soft pastel pink
        'yellow-light': '#FFF9C4',     // Light yellow
        'green-light': '#C8E6C9',      // Light green
        'pink-light': '#FFE0E6',       // Light pink
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

