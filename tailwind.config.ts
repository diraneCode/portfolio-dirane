import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        night: { DEFAULT: "#121212", 2: "#1A1A1A", 3: "#242424" },
        paper: { DEFAULT: "#FFFFFF", 2: "#F4F3EF" },
        ink: { DEFAULT: "#121212", muted: "#4A4A4A", subtle: "#666666" },
        ash: { DEFAULT: "#B8B8B8", 2: "#7A7A7A" },
        brand: { DEFAULT: "#2F5BEB", 600: "#2449C9", 100: "#DCE6FF", light: "#7D9BFF" },
        // alias (chatbot, anciens composants)
        primary: { DEFAULT: "#2F5BEB", 50: "#EEF3FF", 600: "#2449C9" },
        cream: "#FFFFFF",
        line: { DEFAULT: "rgba(255,255,255,0.12)", strong: "rgba(255,255,255,0.22)", light: "#E4E4E4", lightStrong: "#CFCFCF" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        giant: ["clamp(4.75rem, 22vw, 22rem)", { lineHeight: "0.82", letterSpacing: "-0.045em" }],
        "display-xl": ["clamp(2.75rem, 6.5vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "brush-xl": ["clamp(2.75rem, 6.5vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "brush-lg": ["clamp(2.1rem, 4.2vw, 3.6rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.45)",
        lift: "0 24px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 80px -10px rgba(47,91,235,0.55)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(47,91,235,0.6)" },
          "70%": { boxShadow: "0 0 0 10px rgba(59,108,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(59,108,255,0)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
