/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.tsx"],
  theme: {
        extend: {
            colors: {
                primary: colors.gray,
                secondary: colors.amber,
                correct: colors.lime,
                wrong: colors.red,
            },
            animation: {
                "bounce-slow": "bounce 1.5s linear infinite",
                "spin-slow": "spin 4s linear infinite"
            },
            keyframes: {
                bounce: {
                    "0%, 100%": {
                        translateY: "0"
                    },
                    "50%": {
                        transalteY: "-2rem"
                    }
                }
            }
        }
  },
  plugins: [],
}

