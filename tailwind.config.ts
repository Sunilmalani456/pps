import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        neutral: {
          100: "#F5F7FA",
          200: "#ABBED1",
          300: "#89939E",
          400: "#717171",
          500: "#4D4D4D",
          600: "#263238",
        },
        shade: {
          100: "#43A046",
          200: "#388E3B",
          300: "#237D31",
          400: "#1B5E1F",
          500: "#103E13",
        },
        tint: {
          100: "#66BB69",
          200: "#81C784",
          300: "#A5D6A7",
          400: "#C8E6C9",
          500: "#E8F5E9",
        },
        "primary-500": "#28CB8B",
        "secondary-500": "#263238",
        "info-500": "#2194f3",
        "warning-500": "#FBC02D",
        "error-500": "#E53835",
        "success-500": "#2E7D31",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
