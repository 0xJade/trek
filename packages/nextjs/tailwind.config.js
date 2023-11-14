/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
themes: [
  {
    scaffoldEth: {
      primary: "#1E1E1E", // Dark Gray
      "primary-content": "#00CC00", // Neon Green
      secondary: "#0000FF", // Blue
      "secondary-content": "#FFFFFF", // White
      accent: "#FFD700", // Gold
      "accent-content": "#000000", // Black
      neutral: "#000000", // Black
      "neutral-content": "#FFFFFF", // White
      "base-100": "#000000", // Black
      "base-200": "#333333", // Dark Gray
      "base-300": "#1E1E1E", // Dark Gray
      "base-content": "#00CC00", // Neon Green
      info: "#0000FF", // Blue
      success: "#00CC00", // Neon Green
      warning: "#FFD700", // Gold
      error: "#FF0000", // Red
  
      "--rounded-btn": "0.5rem",
  
      ".tooltip": {
        "--tooltip-tail": "6px",
        "--tooltip-color": "hsl(var(--p))",
      },
    },
  },
  {
    scaffoldEthDark: {
      primary: "#1E1E1E", // Dark Gray
      "primary-content": "#00CC00", // Neon Green
      secondary: "#0000FF", // Blue
      "secondary-content": "#FFFFFF", // White
      accent: "#FFD700", // Gold
      "accent-content": "#000000", // Black
      neutral: "#000000", // Black
      "neutral-content": "#FFFFFF", // White
      "base-100": "#000000", // Black
      "base-200": "#333333", // Dark Gray
      "base-300": "#1E1E1E", // Dark Gray
      "base-content": "#00CC00", // Neon Green
      info: "#0000FF", // Blue
      success: "#00CC00", // Neon Green
      warning: "#FFD700", // Gold
      error: "#FF0000", // Red
  
      "--rounded-btn": "0.5rem",
  
      ".tooltip": {
        "--tooltip-tail": "6px",
        "--tooltip-color": "hsl(var(--p))",
      },
    },
  },
  {
    exampleUi: {
      primary: "#1E1E1E", // Dark Gray
      "primary-content": "#00CC00", // Neon Green
      secondary: "#0000FF", // Blue
      "secondary-content": "#FFFFFF", // White
      accent: "#FFD700", // Gold
      "accent-content": "#000000", // Black
      neutral: "#000000", // Black
      "neutral-content": "#FFFFFF", // White
      "base-100": "#000000", // Black
      "base-200": "#333333", // Dark Gray
      "base-300": "#1E1E1E", // Dark Gray
      "base-content": "#00CC00", // Neon Green
      info: "#0000FF", // Blue
      success: "#00CC00", // Neon Green
      warning: "#FFD700", // Gold
      error: "#FF0000", // Red
  
      "--rounded-btn": "0.5rem",
  
      ".tooltip": {
        "--tooltip-tail": "6px",
        "--tooltip-color": "hsl(var(--p))",
      },
    },
  }
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      fontFamily: {
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        grow: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.1, 1.1)" },
        },
      },
      animation: {
        grow: "grow 5s linear infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        zoom: "zoom 1s ease infinite",
      },
    },
  },
};
