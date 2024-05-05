/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'blue-100': '#3c7bc5',
                'blue-200': '#3a6fa1',
                'blue-300': '#1a5a92',
                'blue-400': '#032242',
                'lightblue-100': '#bbdefb',
            }
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            comfortaa: ['Comfortaa', 'sans-serif']
        },
    },
    plugins: [],
};
