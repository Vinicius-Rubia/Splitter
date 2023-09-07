/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Space Mono, monospace, Arial, sans-serif",
      },
      colors: {
        primary: "#482419",
        secundary: "#D90000",
        terciary: "#F2950A",
        field: "#F1F1F1",
      },
      backgroundImage: {
        "conic-gradient": "conic-gradient(from -22deg at 50% 50%, #F00 0deg, #000 360deg)",
      },
    },
  },
  plugins: [],
}

