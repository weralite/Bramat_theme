const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt',
        './src/**/*.js',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: tailpress.colorMapper(tailpress.theme('settings.color.palette', theme)),
            fontSize: {
                'xs': '0.75rem', // 12px
                'sm': '0.875rem', // 14px
                'base': '1rem', // 16px
                'lg': '1.125rem', // 18px
                'xl': '1.25rem', // 20px
                '2xl': '1.5rem', // 24px
                '3xl': '1.875rem', // 30px
                '4xl': '2.25rem', // 36px
                '5xl': '3rem', // 48px
                '6xl': '4rem', // 64px
                '7xl': '5rem', // 80px
            },
            fontFamily: {
                'josefin': ['Josefin Slab', 'serif'], 
                'teko': ['Teko', 'sans-serif'], 
            },
            height: {
                '7': '1.75rem', // Custom height value
                '8': '2rem', // Custom height value
                '9': '2.25rem', // Custom height value
                '10': '2.5rem', // Custom height value
                '11': '2.75rem', // Custom height value
                '12': '3rem', // Custom height value
                '14': '3.5rem', // Custom height value
                '16': '4rem', // Custom height value
                '18': '4.5rem', // Custom height value
                '20': '5rem', // Custom height value
                '24': '6rem', // Custom height value
                '72': '18rem', // Custom height value
            },
        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '782px',
            'lg': tailpress.theme('settings.layout.contentSize', theme),
            'xl': tailpress.theme('settings.layout.wideSize', theme),
            '2xl': '1440px'
        }
    },
    variants: {
        extend: {
            textColor: ['hover', 'focus'],
            fontWeight: ['hover', 'focus'],
        }
    },
    plugins: [
        tailpress.tailwind,
        function ({ addComponents }) {
            addComponents({
              '.primary-li-class-parent-desktop': {
                'align-items': 'top',
                'position': 'relative',
                'padding': '0.75rem 1.25rem', /* equivalent to py-3 px-5 */
                'color': 'white',
                'text-decoration': 'none',
                'transition': 'all 100ms',
                '&:hover': {
                  'background-color': '#d1d5db', /* hover:bg-gray-300 */
                  'color': 'black',              /* hover:text-black */
                  'text-decoration': 'underline',
                },
                '.group:hover &': {
                  'background-color': '#d1d5db', /* group-hover:bg-gray-300 */
                },
              },
            });
          },
    ]
};
