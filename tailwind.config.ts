import type { Config } from "tailwindcss";

const colors = {
  light: {
    primary: "#FFFAFA",
    secondary: "#73044C",
    accent: "#FC820B",
    divider: "#CCCCCC",
    inactive: "#999999",
    inactive2: "#717171",
    "secondary-alt": "#680444",
    "accent-alt": "leniar-gradient(#FC820B,#CA6809)",
    "primary-button": "leniar-gradient(#73044C,#4A0236)",
    "primary-card": "#F5F3F3",
    "success-container": "#DAF8E6",
    "success-container-accent": "#22AD5C",
    "warning-container": "#FFFBEB",
    "warning-container-accent": "#FBBF24",
    "error-container": "#FEF3F3",
    "error-container-accent": "#F23030",
    "on-primary": "#222222",
    "on-secondary": "#F0F0F0",
    "on-warning-container": "#9D5425",
    "on-success-container": "#195427",
    "on-error-container": "#B40014",
    "on-success-container-body": "#D0915C",
    "search-bar": "#FEFDFD",
  },
  dark: {
    primary: "#242424",
    secondary: "#FC820B",
    inactive: "#666666",
    "on-primary": "#F0F0F0",
    "primary-card": "#222222",
    "on-secondary": "#333333",
    "primary-button": "leniar-gradient(#AB6894,#9D4F82)",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: colors,
    },
  },
  plugins: [],
};

export default config;
