module.exports = {
    prefix: 't-',
    theme: {
        extend: {
            colors: {
                /* Extend/Add Colors */
                'roller-blue': '#01619D',
                roller: '#569223',
                transparent: 'transparent',
                current: 'currentColor',
                primary: '#5c6ac4',
                secondary: '#ecc94b',
                grey: '#17191C'
            }
        }
        // colors: {
        //   /* Override Colors */
        //   transparent: 'transparent',
        //   current: 'currentColor',
        //   primary: '#5c6ac4',
        //   secondary: '#ecc94b',
        // },
    },
    variants: {},
    plugins: [],
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ]
};
