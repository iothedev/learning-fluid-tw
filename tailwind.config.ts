import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';

export default {
    content: {
        files: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        extract,
    },
    theme: {
        screens,
        fontSize,
        extend: {
            colors: {
                background: {
                    1: '#FFFFFF',
                    2: '#191A23',
                    3: '#F3F3F3',
                    4: '#292A32'
                },
                foreground: {
                    1: '#000000',
                    2: '#000000',
                },
                accent: {
                    1: '#B9FF66',
                },
            },
        },
    },
    plugins: [fluid],
} satisfies Config;
