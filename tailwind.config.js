module.exports = {
  important: true,
  purge: ['./src/**/*.{html,ts}'],
  content: ["./src/**/*.{html,js,ts}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '2/3': '2fr 1fr'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    // themes: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },

        // extra: {
        //   "primary": "#16A34A",
        //
        //   "secondary": "#FFFFFF",
        //
        //   "accent": "#94b7e8",
        //
        //   "neutral": "#191B1F",
        //
        //   "base-100": "#34DF92",
        //
        //   "info": "#FFFFFF",
        //
        //   "success": "#34DF92",
        //
        //   "warning": "#CB7A10",
        //
        //   "error": "#FB6077",
        // },
        // aqua: {
        //   ...require("daisyui/src/colors/themes")["[data-theme=aqua]"],
        //   primary: "white",
        //   secondary: "rgb(229 231 235)"
        // },
        // light: {
        //   ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        // },
        // dark: {
        //   ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
        //   },
        // cyberpunk: {
        //   ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
        //     primary: "rgb(14 165 233)",
        //   },
        // synthwave: {
        //   ...require("daisyui/src/colors/themes")["[data-theme=synthwave]"],
        //     primary: "#ED156D",
        // }
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
  presets: [
    require('tailwindcss/defaultConfig'),
     // require('xtendui/tailwind.preset'),
  ],
  // put other content e.g.: './src/**/*.{html,js}'
  // content: ['./node_modules/xtendui/src/*.mjs'],
}
