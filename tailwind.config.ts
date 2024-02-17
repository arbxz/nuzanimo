import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "pure-white": "#FFFFFF",
      white: "#E9EBEA",
      grey: "#CECFD1",
      black: "#141311",
      red: "#FF5858",
      green: "#6ABD7C",
      vermillion: "#FF4501",
      blue: "#329FFE",
      yellow: "#F5C000",
      "pastel-dark": "#354259",
      "pale-yellow": "#FEEF7B",
      "pastel-green": "#8ACDD7",
      "pastel-lime": "#B9F3E4",
      "pastel-beige": "#F5EEE6",
      "pastel-yellow": "#F9F9E0",
      "pastel-pink": "#FFC0D9",
      "pastel-red": "#FF90BC",
      "pastel-purple": "#D0BFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }: any) {
      addBase({
        html: { scrollBehaviour: "smooth" },
        h1: {
          letterSpacing: "-2%",
        },
        h2: {
          letterSpacing: "-2%",
        },
      });
      addUtilities({
        ".content-auto": {
          contentVisibility: "auto",
        },
      });
    }),
  ],
};
export default config;
