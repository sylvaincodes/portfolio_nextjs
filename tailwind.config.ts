import type { Config } from "tailwindcss"
import colors from 'tailwindcss/colors'
const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        'xs': '0rem',
        'sm': '0rem',
        'md': '0rem',
        'lg': '0rem',
        'xl': '4rem',
        '2xl': '4rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      colors: {

        slate: colors.slate,

        dark: "#0c1222",
    
        // rose
        primary: {
          '50': '#fff0f8',
          '100': '#ffe3f4',
          '200': '#ffc6ea',
          '300': '#ff98d6',
          '400': '#ff59b9',
          '500': '#ff289b',
          '600': '#fe0a79',
          '700': '#de005a',
          '800': '#b7004a',
          '900': '#980341',
          '950': '#5e0022',
        },

        // paarl
        secondary: {
          '50': '#fcf7f0',
          '100': '#f9ecdb',
          '200': '#f2d6b6',
          '300': '#eab987',
          '400': '#e09457',
          '500': '#d97836',
          '600': '#ca612c',
          '700': '#ad4d27',
          '800': '#873d25',
          '900': '#6d3321',
          '950': '#3a1910',
        },

        divider: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
      },

      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.10em',
        wider: '.50em',
        widest: '1.20em',
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4.052rem',
        '7xl': '5.052rem',
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },

  },
  plugins: [require("tailwindcss-animate"),
    addVariablesForColors,
  function ({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        "bg-grid": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
  ],
} satisfies Config

export default config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
