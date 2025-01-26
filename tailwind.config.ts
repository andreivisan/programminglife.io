import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0B0F",
        foreground: "#F2FCE2",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#F2FCE2",
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          foreground: "#F2FCE2",
        },
        mint: {
          DEFAULT: "#F2FCE2",
          muted: "#D3E4D5",
        },
        lila: {
          DEFAULT: "#9b87f5",
          muted: "#8B7BE0",
        },
        neon: {
          blue: "#0EA5E9",
          purple: "#9b87f5",
          cyan: "#22D3EE",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#F2FCE2',
            h2: {
              color: '#F2FCE2',
              fontFamily: 'Orbitron, sans-serif',
            },
            h3: {
              color: '#F2FCE2',
              fontFamily: 'Orbitron, sans-serif',
            },
            strong: {
              color: '#F2FCE2',
            },
            a: {
              color: '#22D3EE',
              '&:hover': {
                color: '#0EA5E9',
              },
            },
            code: {
              color: '#22D3EE',
            },
            pre: {
              backgroundColor: '#1E1E1E',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
} satisfies Config;