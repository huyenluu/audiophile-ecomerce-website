/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                black: '#000000',
                orange: '#D87D4A',
                'orange-lighter': '#FBAF85',
                'grey-light': '#CFCFCF',
                'grey-white': '#F1F1F1',
                red: '#CD2C2C',
                'black-lighter': '#101010',
                'bg-color-default': '#FAFAFA',
            },
            fontSize: {
                'heading-1': [
                    '3.5rem',
                    {
                        lineHeight: '3.625rem',
                        letterSpacing: '.125rem',
                        fontWeight: '700',
                    },
                ],
                'heading-2': [
                    '2.5rem',
                    {
                        lineHeight: '2.75rem',
                        letterSpacing: '.09rem',
                        fontWeight: '700',
                    },
                ],
                'heading-3': [
                    '2rem',
                    {
                        lineHeight: '2.25rem',
                        letterSpacing: '.07rem',
                        fontWeight: '700',
                    },
                ],
                'heading-4': [
                    '1.75rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '.125rem',
                        fontWeight: '700',
                    },
                ],
                'heading-5': [
                    '1.5rem',
                    {
                        lineHeight: '100%',
                        letterSpacing: '.107rem',
                        fontWeight: '700',
                    },
                ],
                'heading-6': [
                    '1.125rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '.08rem',
                        fontWeight: '700',
                    },
                ],
                overline: [
                    '0.875rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '.625rem',
                        fontWeight: '400',
                    },
                ],
                subtitile: [
                    '0.8125rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '.058rem',
                        fontWeight: '700',
                    },
                ],
                p: [
                    '.94rem',
                    {
                        lineHeight: '1.56rem',
                        fontWeight: '500',
                    },
                ],
                button: [
                    '.8125rem',
                    {
                        lineHeight: 'normal',
                        letterSpacing: '.0625rem',
                        fontWeight: '700',
                    },
                ],
            },
            container: {
                center: true,
                padding: '2rem',
                screens: { lg: '69.4rem' },
            },
        },
    },
    plugins: [],
};

// to-do custom padding for each screen with container class
