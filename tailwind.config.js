/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        azure: "#E5F5F1",
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#484848",
        primary: "#009a73",
        yellow: "#FBB040",
        "body-color": "#788293",
        "body-color-dark": "#009a73",
        "gray-dark": "#1E232E",
        "gray-light": "#F0F2F9",
        stroke: "#E3E8EF",
        "stroke-dark": "#353943",
        "bg-color-dark": "#171C28",
        french_gray: "#CBD5E1",
        battleship_gray: "#939393",
        alice_blue: "#F2F8FA",
        dark_grey: "#757575",
        snow: "#FFF8F5",
        mint_cream: "#F9FDF5",
        floral_white: "#FFFCF4",
        anti_flash_white: "#F7F9FC",
        mint_cream_medium: "#F4FAF9",
        seasalt: "#F7F7F7",
        erin: "#50FF5D",
        yellow_600: "#FFCE70",
        aero_blue: "#C7F8D6",
        pale_cyan: "#8FDBFF",
        yellow_700: "#FFA700",
        fluorescent_red: "#FF5050",
        fluorescent_red_200: "#FFDBDB",
        altdorf_sky_blue: "#00A3AD",
        altdorf_sky_blue_200: "#D6F6F8",
        sunset_yellow: "#F9853C",
        sunset_yellow_200: "#FFDEC9",
        yellow_800: "#FAC300",
        yellow_200: "#FBF0C9",
        mintcream: "#EBF7F4",
        whitesmoke: "#f8fafc",
        lightcyan: "#DBF1EB",
        cornflowerblue: "#6889CF",
        lightcornflowerblue: "#B0CFED",
        darkcyan: "#128C7E",
        lightcyan_200: "#9AD7D7",
        light_black_opacity: "rgba(49,49,49,0.8)",
        bg_primary_light: "#F4F4F4",
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
        dim_grey_shadow: "0px 2px 8px 0px #63636333",
        dark_grey_shadow: " 0px 6.16px 25.54px 0px #64646F33;",
        common_shadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.20)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      spacing: {
        84: "84px",
      },
      fontSize: {
        52: "52px",
        64: "64px",
      },
      backgroundSize: {
        1024: "1024px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-green": "linear-gradient(360deg, #007154 0%, #01C191 81.33%)",
        "gradient-yellow":
          "linear-gradient(278.75deg, #FFFCEB 24.76%, #FFF7CB 154.79%)",
        "gradient-light-red":
          "linear-gradient(121.84deg, rgba(255, 80, 80, 0.1) 24.91%, rgba(255, 80, 80, 0.05) 41.95%);",
        "gradient-text-stremline":
          "linear-gradient(90deg, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%);",
        "gradient-connect":
          "linear-gradient(103.07deg, rgba(52, 200, 129, 0.1) 1.11%, rgba(207, 108, 254, 0.05) 74.28%)",
        "gradient-text-connect":
          "linear-gradient(287.98deg, #34C881 37.73%, #CF6CFE 55.91%)",
        "gradient-text-pricing":
          "linear-gradient(89.54deg, #FFD372 27.53%, #F8B997 48.23%, #9368CF 65.85%);",
        "gradient-feature-1":
          "linear-gradient(121.84deg, rgba(0, 163, 173, 0.1) 24.91%, rgba(0, 163, 173, 0.05) 41.95%)",
        "gradient-feature-2":
          "linear-gradient(121.84deg, rgba(104, 137, 207, 0.15) 24.91%, rgba(104, 137, 207, 0.1) 41.95%)",
        "gradient-feature-3":
          "linear-gradient(121.84deg, rgba(249, 133, 60, 0.12) 24.91%, rgba(249, 133, 60, 0.07) 41.95%)",
      },
    },
  },
  plugins: [],
};
