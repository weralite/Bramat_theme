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
            width: {
                '13': '13rem',
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
                16: '4rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
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
        function ({ addComponents }) {
            addComponents({
                '.secondary-li-class-parent-desktop': {
                    'position': 'relative',
                    'min-width': '13rem',
                    'max-width': '13rem',
                    'height': '3rem',
                    'display': 'flex',
                    'color': 'white',
                    'text-align': 'center',
                    'align-items': 'center',
                    'vertical-align': 'middle',
                    'text-decoration': 'none',
                    'border-bottom': '1px solid transparent',
                    'transition': 'all 100ms',


                    '&:hover': {
                        'background-color': '#d1d5db', /* hover:bg-gray-300 */
                        'color': 'black',
                        'text-decoration': 'underline',

                    },
                    '.group:hover &': {
                        'background-color': '#f3f4f6',
                        'color': 'black',
                        'border-bottom': '1px solid #d1d5db',
                        'z-index': '10',
                    },
                },
                // New class for hover background animation
                '.hover-background-animation': {
                    'position': 'absolute',
                    'top': '100%',
                    'left': '50%',
                    'transform': 'translateX(-50%) scaleY(0)',  // Initially hidden
                    'max-width': '13rem',
                    'min-width': '13rem',
                    'overflow': 'hidden',
                    'transition': 'transform 100ms ease-in-out',  // Transition for background
                    'transform-origin': 'top',
                    'will-change': 'transform',

                    '.group:hover &': {
                        'transform': 'translateX(-50%) scaleY(1)',
                    },

                    // Text styles for the <a> tag
                    'a': {
                        'display': 'block',
                        'transform': 'scaleY(0)',  // Hide the text initially
                        'opacity': '0',
                        'transition': 'opacity 100ms ease-in-out',
                        'transform-origin': 'top',  // Animate from the top
                        'margin-left': '1rem',
                        'text-align': 'left',
                        'z-index': '10',
                        '.group:hover &': {
                            'transform': 'scaleY(1)',  // Show text on hover
                            'opacity': '1',  // Make text visible
                        },
                    },
                },
                '.group:hover .hover-background-animation a': {
                    'visibility': 'visible',  // Ensure text is visible only when background is scaled
                    'transition': 'opacity 100ms ease-in-out 100ms', // Delay text opacity to start after background
                },
            });
        },
    ]
};
