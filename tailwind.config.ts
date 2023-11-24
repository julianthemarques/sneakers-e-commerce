import type { Config } from "tailwindcss";

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
      colors: {
        orange: "#FF7D1A",
        paleOrange: "#FFEDE0",
        veryDarkBlue: "#1D2025",
        darkGrayishBlue: "#68707D",
        grayishBlue: "F7F8FD",
        lightGrayishBlue: "#F7F8FD",
      },
    },
  },
  plugins: [],
};
export default config;
