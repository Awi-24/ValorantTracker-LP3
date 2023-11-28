module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        valorant: ['Valorant', 'sans-serif'],
      },
      colors: {
        mainred: '#FD4556',
        secred: '#BD3944',
        darkred: '#53212B',
        background: '#000000',
      },
      backgroundImage: {
        'valorant-menu': "url('./src/img/valorantmenu.png')",
        'agent-card': "url('./src/img/Ready_Map.png')",
        'map-background': "url('./src/img/map.jpg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundPosition: {
        'center': 'center',
        'top': 'top',
        'right': 'right',
        'bottom': 'bottom',
        'left': 'left',
      },
      backgroundColor: {
        'transparent': 'transparent',
        'black': '#000000',
        'white': '#ffffff',
        'mainred': '#FD4556',
        'secred': '#BD3944',
        'darkred': '#53212B',
      },
    },
  },
  plugins: [],
};
