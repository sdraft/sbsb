/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smalt': {
          '50': '#edf6ff',
          '100': '#d6e9ff',
          '200': '#b5dbff',
          '300': '#83c5ff',
          '400': '#48a5ff',
          '500': '#1e7dff',
          '600': '#075bff',
          '700': '#0043f5',
          '800': '#0836c5',
          '900': '#0c2e8a',
          '950': '#0e215d',
        },
        'shamrock': {
          '50': '#ecfdf6',
          '100': '#d1fae8',
          '200': '#a7f3d5',
          '300': '#6fe6bf',
          '400': '#50d8af',
          '500': '#11b88c',
          '600': '#069572',
          '700': '#05775e',
          '800': '#075e4c',
          '900': '#064e40',
          '950': '#022c25',
        }
      },
      fontFamily: {
        titre: ['Poppins', 'sans-serif'], // Remplacez 'Poppins' par la police Google Fonts de votre choix pour les titres
        texte: ['Lato', 'sans-serif'] // Remplacez 'Lato' par la police Google Fonts de votre choix pour le texte
      },
      fontSize: {
        'maintitle': '2rem', // Taille pour les titres principaux
        'subtitle': '1.5rem', // Taille pour les sous-titres
        'text': '1rem' // Taille pour le texte
      }
    },
  },
  plugins: [],
}