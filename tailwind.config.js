/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shadcn UI semantic colors (maps to CSS variables)
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        // Earthy warm custom colors
        'earth-bg': '#F5EFE6',
        'earth-primary': '#A0522D',
        'earth-secondary': '#EDE0D4',
        'earth-text-primary': '#2C1810',
        'earth-text-secondary': '#6B4C3B',
        'earth-text-muted': '#A08070',
        'earth-border': '#D4B896',
        'earth-border-light': '#EAD9C8',
        'earth-brand-muted': '#E8C9A0',
        
        // Earthy warm color palette - Dark mode
        'dark-earth-bg': '#13100E',
        'dark-earth-card': '#1E1A17',
        'dark-earth-sidebar': '#1A1411',
        'dark-earth-accent': '#D48357',
        'dark-earth-text-primary': '#F6F2EE',
        'dark-earth-text-secondary': '#A08C82',
        'dark-earth-text-muted': '#6B5E57',
        'dark-earth-border': '#2C2420',
        'dark-earth-border-light': '#4A3A32',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease',
        'slide-up': 'slideUp 0.25s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}