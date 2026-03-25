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
        primary: {
          50: '#f0f9f4',
          100: '#daf0e3',
          200: '#b8e2cc',
          300: '#87ceaa',
          400: '#5ab88c',
          500: '#2d5f4f',
          600: '#1e4d3c',
          700: '#1a3f32',
          800: '#16332a',
          900: '#132923',
        },
        accent: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfd0',
          300: '#d4c4a8',
          400: '#bfa67d',
          500: '#a88c5e',
          600: '#8b7049',
          700: '#6d5739',
          800: '#4f3f2a',
          900: '#3a2e1f',
        },
        bottle: {
          50: '#f2f7f5',
          100: '#e0ebe6',
          200: '#c1d7cd',
          300: '#9bbdad',
          400: '#6f9d88',
          500: '#2d5f4f',
          600: '#234c3f',
          700: '#1d3f34',
          800: '#18332b',
          900: '#142a23',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        elegant: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
