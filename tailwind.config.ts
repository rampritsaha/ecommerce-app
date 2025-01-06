import type { Config } from 'tailwindcss';
import { COLORS } from './lib/constants';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        accent: COLORS.accent,
        background: COLORS.background,
        text: COLORS.text,
        error: COLORS.error,
        success: COLORS.success,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;