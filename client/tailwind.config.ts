import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "14": "repeat(14, minmax(0, 1fr))",
        "13": "repeat(14, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "12": "repeat(12, minmax(0, 1fr))",
        "11": "repeat(11, minmax(0, 1fr))",
        "10": "repeat(10, minmax(0, 1fr))",
        "9": "repeat(9, minmax(0, 1fr))",
        "8": "repeat(8, minmax(0, 1fr))",
        "7": "repeat(7, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
        "span-13": "span 14 / span 14",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span  12",
        "span-7": "span 7 / span 7",
      },
    },
  },
  plugins: [],
};
export default config;
