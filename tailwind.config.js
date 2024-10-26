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
            maxWidth: {
                'sm': '24rem',  // 384px
                'md': '28rem',  // 448px
                'lg': '32rem',  // 512px
                'xl': '36rem',  // 576px
                '2xl': '42rem', // 672px
                '3xl': '48rem', // 768px
                '4xl': '56rem', // 896px
                '5xl': '64rem', // 1024px
                '6xl': '72rem', // 1152px
                '7xl': '80rem', // 1280px
              },
            width: {
                '7': '1.75rem', // Custom width value
                '8': '2rem', // Custom width value
                '9': '2.25rem', // Custom width value
                '10': '2.5rem', // Custom width value
                '15': '15rem',
                '20': '20rem',
                '24': '24rem',
                '25': '25rem',
                '30': '30rem',
                '35': '35rem',
                '40': '40rem',
                '45': '45rem',
                '50': '50rem',
                '55': '55rem',
                '60': '60rem',
                '65': '65rem',
                '70': '70rem',
                '75': '75rem',
                '80': '80rem',
                '85': '85rem',
            },
            boxShadow: {
                'mobile': '0 5px 0 0 rgba(0, 0, 0, 0.9)', // Straight bottom line shadow
              },
            zIndex: {
                '10': '10',
                '1': '1',
                '0': '0',
                '-1': '-1',
                '-2': '-2',
                '-10': '-10',
                '-20': '-20',
                '-30': '-30',
                '-40': '-40',
                '-50': '-50',
            },
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
                '8xl': '6rem', // 96px
                '9xl': '8rem', // 128px
            },
            fontFamily: {
                'josefin': ['Josefin Slab', 'serif'],
                'teko': ['Teko', 'sans-serif'],
                'assistant': ['Assistant', 'sans-serif'],
                'space': ['Space Grotesk', 'sans-serif'],
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
            gap: {
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '7': '1.75rem',
                '8': '2rem',
                '9': '2.25rem',
                '10': '2.5rem',
            },
            padding: {
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                18: '4.5rem',
                20: '5rem',
                22: '5.5rem',
                24: '6rem',
                26: '6.5rem',
                28: '7rem',
                30: '7.5rem',
                32: '8rem',
            },
            screens: {
                'xs': '480px',
                'sm': '600px',
                'md': '782px',
                'lg': tailpress.theme('settings.layout.contentSize', theme),
                'xl': tailpress.theme('settings.layout.wideSize', theme),
                '2xl': '1440px'
            },
        },
    },
    variants: {
        fontSmoothing: ['responsive'],
        extend: {
            textColor: ['hover', 'focus'],
            fontWeight: ['hover', 'focus'],
        },

    },


    plugins: [
        tailpress.tailwind,
        function ({ addUtilities }) {
            const newUtilities = {
                '.separator-class span + span::before': {
                    content: '", "',
                },
            };
            addUtilities(newUtilities, ['responsive']);
        },
    ]
};
