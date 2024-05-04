/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "screen-calc": "calc(100vh - 52px)"
      },
      minHeight:{
        "screen-calc": "calc(100vh - 52px)"
      },
      margin:{
        "1-neg": "-1rem"
      },
      animation: {
        'move-right': 'moveRight 1s ease-out',
        'move-left': 'moveLeft 1s ease-out',
        'fade': 'fade 2s alternate',
        'type': 'type 1.5s steps(9), cursorType .25s step-end infinite alternate',
      },
      keyframes: {
        moveRight: {
          "0%":{
            transform: "translateX(-300px)",
          },
          "75%":{
            transform: "translateX(15px)",
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        moveLeft: {
          "0%":{
            transform: "translateX(300px)",
          },
          "75%":{
            transform: "translateX(-15px)",
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        fade:{
          "0%":{
            opacity: "0"
          },"100%":{
            opacity: "100%"
          }
        },
        type:{
          "from": {
            width: "0px"
          }
        },
        cursorType:{
          "50%": {
            borderColor: "transparent"
          }
        }
      },
      backgroundImage:{
        'header-vetor': "url('/elements/header.svg')",
        'linkedin': "url('/icons/linkedin.svg')",
        'github-icon': "url('/icons/github-icon.svg')",
        'whatsapp-icon': "url('/icons/whatsapp-icon.svg')",
        'sobreMim-vetor': "url('/elements/sobreMim-vetor.svg')",
        'lastProject-vetor': "url('/elements/lastProject-vetor.svg')",
        'right_arrow': "url('/icons/right_arrow.svg')",
        'down_arrow': "url('/icons/down_arrow.svg')",
      },
      fontFamily:{
        'didot': [
          'Didot'
        ],
        'inter': [
          'Inter'
        ]
      }
    },
    colors:{
      'red': "#FF5733",
      'black': "#0E0E0E",
      "white": "#ECECEC",
      "gray": "#555"
    }
  },
  plugins: [],
}