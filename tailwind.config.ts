import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF6E2",
        red: { DEFAULT: "#E52727", dark: "#AC1515" },
        orange: "#FFA840",
        blue: "#29A5FF",
        dark: "#1E1E1E",
        tint: {
          blue: "#B2D9EC",
          orange: "#FFDAA8",
          salmon: "#FDD9C8",
          gray: "#DCDCDC",
        },
      },
      fontFamily: {
        sans: ["Clash Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
