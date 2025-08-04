/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fff0f4",
          light: "#c3acd0",
          dark: "#543776",
        },
      },
    },
  },
  plugins: [],
};
