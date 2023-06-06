/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'dark-taupe': '#8C7760',
                taupe: '#B2A495',
                'light-taupe': '#F2F0ED',
            },
        },
        screens: {
            xxl: { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1291px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '992px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [],
};
