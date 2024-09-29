import type { Config } from 'tailwindcss';

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
            accent: '#89856C',
            muted: '#dfdfdf',
            soft: '#F6F4F3',

            //Crystallize
            // dark: "#403953",
            // light: "#ffffff",
            // accent: "#699CA7",
            // muted: "#dfdfdf",
            // soft: "#F7F6F9",
        },
    },
    plugins: [],
};
export default config;
// Neutral, light, vidid, mutedm, dark
