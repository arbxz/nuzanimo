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
