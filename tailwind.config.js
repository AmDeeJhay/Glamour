/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    important: 'true',
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Epilogue', 'sans-serif'],
            },
            colors: {
                gold: {
                    '01': '#FEFDFB',
                    '02': '#FDF8F0',
                    '03': '#F9EEDC',
                    '04': '#F3DFC0',
                    '05': '#E8C891',
                    'main': '#C88A2A',
                    '06': '#A4701F',
                    '07': '#7D5518',
                    '08': '#5A3D11',
                },
                blue: {
                    '01': '#E8F3F8',
                    '02': '#6B9DB8',
                    '03': '#4A7A94',
                },
                gray: {
                    25: '#fcfcfd',
                    50: '#f9fafb',
                    100: '#f2f4f7',
                    200: '#e4e7ec',
                    300: '#d0d5dd',
                    400: '#98a2b3',
                    500: '#667085',
                    600: '#475467',
                    700: '#344054',
                    800: '#1d2939',
                    900: '#101828',
                },
                primary: {
                    DEFAULT: '#C88A2A',
                    light: '#EBCD9E',
                    lighter: '#F3E3C8',
                },
            },
        },
    },
    plugins: [],
}
