import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
        primary: 'var(--color-primary)',
      },
      borderRadius: {
        lg: '16px',
        md: '10px',
        sm: '6px',
      },
      boxShadow: {
        card: '0 4px 16px rgba(0, 0, 0, 0.4)',
        glow: '0 0 20px rgba(255, 215, 0, 0.3)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
