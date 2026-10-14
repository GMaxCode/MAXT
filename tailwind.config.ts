import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#111111',
        border: '#262626',
        text: '#FAFAFA',
        'text-muted': '#A1A1AA',
        accent: '#FAFAFA',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #171717 100%)',
        'gradient-radial':
          'radial-gradient(ellipse at top, rgba(250,250,250,0.06), transparent 60%)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.55)' },
          '50%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;