/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        oxblood: { DEFAULT: '#762B3B', deep: '#4D202C', light: '#9a3f52' },
        parchment: '#F2EDE4',
        paper:     '#FBF9F5',
        ink:       { DEFAULT: '#201C1B', soft: '#2e2926', muted: '#4a4441' },
        clay:      '#A78B78',
        stone:     '#D8CEC1',
        sage:      '#92947B',
        brass:     '#B08A57',
        rose:      '#C58D91',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        editorial: '0 1px 0 0 rgba(32,28,27,0.05) inset, 0 20px 60px -30px rgba(32,28,27,0.10)',
        'oxblood-sm': '0 0 0 1px rgba(118,43,59,0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        'pulse-dot': {
          '0%':   { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        'fade-up':   'fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in':   'fade-in 0.5s ease both',
        blink:       'blink 1.1s step-end infinite',
        'pulse-dot': 'pulse-dot 2.2s ease-out infinite',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};
