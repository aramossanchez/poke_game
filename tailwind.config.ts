import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./atoms/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': 'var(--primaryColor)',
        'secondaryColor': 'var(--secondaryColor)',
        'tertiaryColor': 'var(--tertiaryColor)',
        'primaryBackground': 'var(--primaryBackground)',
        'secondaryBackground': 'var(--secondaryBackground)',
        'titleColor': 'var(--titleColor)',
        'subtitleColor': 'var(--subtitleColor)',
        'modalBackground': 'var(--modalBackground)',
        'colorSuccess': 'var(--colorSuccess)',
      },
      height: {
        'headerHeight': 'var(--headerHeight)'
      },
      animation: {
        'wiggle': 'wiggle 2s linear infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 7%": {
            transform: "rotateZ(0)",
          },
          "15%": {
            transform: "rotateZ(-15deg)",
          },
          "20%": {
            transform: "rotateZ(10deg)",
          },
          "25%": {
            transform: "rotateZ(-10deg)",
          },
          "30%": {
            transform: "rotateZ(6deg)",
          },
          "35%": {
            transform: "rotateZ(-4deg)",
          },
          "40%, 100%": {
            transform: "rotateZ(0)",
          }
        }
      },
    }
  },
  plugins: [],
};
export default config;
