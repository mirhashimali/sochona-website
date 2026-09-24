import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        "ink-2": "#0b0c10",
        "ink-3": "#12131a",
        line: "rgba(255, 255, 255, 0.08)",
        "line-2": "rgba(255, 255, 255, 0.14)",
        fg: "#f5f5f7",
        "fg-2": "rgba(245, 245, 247, 0.64)",
        "fg-3": "rgba(245, 245, 247, 0.4)",
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        live: "livepulse 1.8s ease-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.06)" },
        },
        livepulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(52,211,153,0.6)" },
          "70%": { boxShadow: "0 0 0 8px rgba(52,211,153,0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;