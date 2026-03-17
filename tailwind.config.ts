import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        gold: "var(--color-gold)",
        "accent-gold": "var(--color-gold)",
        "navy-deep": "var(--color-primary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "text-dark": "var(--color-text-dark)",
        "text-muted": "var(--color-text-muted)",
      },
      fontFamily: {
        heading: ["var(--font-family-heading)", "serif"],
        body: ["var(--font-family-body)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [heroui()] as any,
};
export default config;
