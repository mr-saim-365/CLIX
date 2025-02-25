/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-bg': '#0f0f1a',  // Base dark color
        'deep-purple': '#2b1957',  // Deep purple hue
        'soft-purple': '#5a3d91',  // Lighter purple tone
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      backgroundImage: {
        'hero-gradient-r': 'linear-gradient(135deg, #0f0f1a 50%, #2b1957 110%, #5a3d91 80%)',
        'hero-gradient-l': 'linear-gradient(270deg, #0f0f1a 50%, #2b1957 110%, #5a3d91 80%)',
      },
    },
  },
  plugins: [],
};
