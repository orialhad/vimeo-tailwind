const colors = require('tailwindcss/colors')
const plugin = require("tailwindcss/plugin");

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            pink: colors.pink,
            lightBlue: colors.lightBlue,
            vimeoBlue: '#5077a6',
            vimeoPink: '#d96a95',
            footerBg: '#23313b',
            lightBlueLogo: '#0faef1',
            menu: '#1a2e3b',
        },
        minHeight: {
            '10': '10px',
            '20': '20px',
            '30': '30px',
            '40': '40px',
            '50': '50px',
            '60': '60px',
            '70': '70px',
            '80': '80px',
            '90': '90px',
            '100': '100px',
            '250': '250px',
            '400': '400px',
            '450': '450px',
            '480': '480px',
            '620': '620px'
        },
        maxHeight: {
            '100': '100px',
            '250': '250px',
            '310': '310px',
            '357': '357px',
            '400': '400px',
            '450': '450px',
            '480': '480px',
            '600': '600px',
            '650': '650px',
            '700': '700px',
            '750': '750px',
            '780': '780px',
            '850': '850px',
            '1000': '1000px',
        },


        fontFamily: {
            'sans': ['Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {
            margin: ['hover'],
            fill:['hover']
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('tailwindcss-pseudo-elements'),
        plugin(({addUtilities}) => {
            const newUtilities = {
                ".line": {
                    content: "' | '",
                },
                ".empty-content": {
                    content: "'          '",
                },
            }
            addUtilities(newUtilities, {
                variants: ["before", "after"],
            });
        })


    ],
}
