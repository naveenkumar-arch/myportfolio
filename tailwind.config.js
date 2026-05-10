/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090B1A',
        card: '#111827',
        neon: {
          purple: '#8B5CF6',
          blue: '#00D9FF'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(111.4deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'neon-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'neon-blue': '0 0 15px rgba(0, 217, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
