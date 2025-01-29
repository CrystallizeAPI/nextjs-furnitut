import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            dark: '#211A1D',
            light: '#ffffff',
            soft: '#F6F4F3',
            accent: '#79745D',
            muted: '#dfdfdf',
            vivid: '#EE7674',

            //Crystallize
            // dark: "#403953",
            // light: "#ffffff",
            // accent: "#699CA7",
            // muted: "#dfdfdf",
            // soft: "#F7F6F9",
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('starting', '@starting-style');
        }),
    ],
};
export default config;
// Neutral, light, vidid, mutedm, dark
