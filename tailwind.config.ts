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
        'modalBackground': 'var(--modalBackground)'
      },
      height: {
        'headerHeight': 'var(--headerHeight)'
      },
    }
  },
  plugins: [],
};
export default config;
