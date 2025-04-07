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
        rubik: ['Rubik', 'sans-serif'],
      },

      backgroundImage: {
        'hero-gradient-tl': 'linear-gradient(to bottom right, #0f0f1a 80%, #2b1957 105%, #5a3d91 80%)',
        'hero-gradient-tr': 'linear-gradient(to bottom left, #0f0f1a 80%, #2b1957 105%, #5a3d91 80%)',
        'hero-gradient-bl': 'linear-gradient(to top right, #0f0f1a 80%, #2b1957 105%, #5a3d91 80%)',
        'hero-gradient-br': 'linear-gradient(to top left, #0f0f1a 80%, #2b1957 105%, #5a3d91 80%)',
        // 'hero-gradient-tl': 'radial-gradient(circle at top left,  #0f0f1a 82% , #2b1957 105%,#5a3d91 80%)',
        // 'hero-gradient-tr': 'radial-gradient(circle at top right,  #0f0f1a 82% , #2b1957 105%,#5a3d91 80%)',
        // 'hero-gradient-bl': 'radial-gradient(circle at bottom left,  #0f0f1a 82% , #2b1957 105%,#5a3d91 80%)',
        // 'hero-gradient-br': 'radial-gradient(circle at bottom right,  #0f0f1a 82% , #2b1957 105%,#5a3d91 80%)',


      },


    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
