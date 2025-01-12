import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1900px",
    },
    extend: {
      fontFamily: {
        sans: "var(--font-archivo)",
      },
      fontSize: {
        "10xl": "9.5rem",
        "11xl": "12rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "2rem",
          lg: "4rem",
          xl: "8rem",
        },
      },
      colors: {
        buttonColor: "#6E3111",
        footerBgColor: "#212529",
      },
    },
  },
  plugins: [],
} satisfies Config;
