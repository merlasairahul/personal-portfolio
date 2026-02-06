/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#6366F1", // Indigo - more vibrant
          light: "#818CF8",
          dark: "#4F46E5",
          foreground: "#ffffff",
        },
        accent: {
          pink: "#EC4899",
          purple: "#A855F7",
          cyan: "#06B6D4",
        },
        dark: {
          bg: "#030712", // Deeper, richer black (gray-950)
          surface: "#0F172A", // Slate-900 - main surface
          card: "#1E293B", // Slate-800 - cards
          elevated: "#334155", // Slate-700 - elevated
          border: "rgba(255,255,255,0.08)",
        },
      },
      backgroundImage: {
        // Mesh gradient backgrounds
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(262,83%,58%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(328,100%,54%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,90%,56%,0.15) 0px, transparent 50%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.3), transparent)',
        'gradient-section': 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)',
        'gradient-glow': 'conic-gradient(from 180deg at 50% 50%, #6366F1 0deg, #A855F7 120deg, #EC4899 240deg, #6366F1 360deg)',
      },
    },
  },
  plugins: [],
}

