/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        "color-primary": "#2F6CE5",
        "color-secondary": "#E56135",
        "color-text": "#2E2E2E",
        "color-gray": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
