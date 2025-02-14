import type { Config } from "tailwindcss";
// :root {
//   --color-black: #091527;
//   --color-gray-dark: #64748b;
//   --color-gray-light: #9db6d9;
//   --color-primary: #2170e5;
//   --color-primary-dark-1: #275eae;
//   --color-primary-dark-2: #16335c;
//   --color-secondary: #7c2ee9;
//   --color-dark-1: #5e26ae;
//   --color-dark-2: #35195c;
//   --color-error: #ef4444;
//   --color-valid: #22c55e;
//   --color-white: #f6f6f6;
// }

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#091527",
        gray: {
          dark: "#64748b",
          light: "#9db6d9",
        },
        primary: {
          DEFAULT: "#2170e5",
          dark: "#275eae",
          darker: "#16335c",
        },
        secondary: {
          DEFAULT: "#7c2ee9",
          dark: "#5e26ae",
          darker: "#35195c",
        },
        error: "#ef4444",
        valid: "#22c55e",
        white: "#f6f6f6",
      },
    },
  },
  plugins: [],
} satisfies Config;
