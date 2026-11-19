import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#040810",
          900: "#080f1e",
          800: "#0e1628",
          700: "#141e34",
          600: "#1b2840",
        },
        mist: {
          50: "#f4f7fb",
          100: "#e8eef7",
          200: "#d0ddef",
          300: "#a8bdd8",
          400: "#7a9abf",
        },
        geo: {
          teal:    "#3ecfcf",
          green:   "#4bd4a0",
          amber:   "#e8a83a",
          violet:  "#8b7dff",
          blue:    "#4a90d9",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)",  "system-ui", "sans-serif"],
        display: ["var(--font-sora)",   "system-ui", "sans-serif"],
      },
      backgroundImage: {
        aurora:
          "radial-gradient(60% 50% at 10% 0%,  rgba(62,207,207,0.20) 0%, transparent 65%)," +
          "radial-gradient(50% 40% at 90% 10%,  rgba(78,164,217,0.18) 0%, transparent 65%)," +
          "radial-gradient(45% 35% at 55% 100%, rgba(75,212,160,0.14) 0%, transparent 65%)",
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass:  "0 8px 32px 0 rgba(0,0,0,0.28)",
        glow:   "0 0 40px rgba(62,207,207,0.22)",
        "glow-amber": "0 0 40px rgba(232,168,58,0.18)",
      },
      keyframes: {
        float:      { "0%,100%": { transform: "translateY(0px)"  }, "50%": { transform: "translateY(-12px)" } },
        shimmer:    { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "pulse-dot":{ "0%,100%": { opacity: "1" }, "50%": { opacity: "0.4" } },
      },
      animation: {
        float:       "float 7s ease-in-out infinite",
        shimmer:     "shimmer 2.5s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
