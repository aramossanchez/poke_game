import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
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
        'subtitleColor': 'var(--subtitleColor)'
      },
      height: {
        'headerHeight': 'var(--headerHeight)'
      }
    }
  },
plugins: [],
};
export default config;
