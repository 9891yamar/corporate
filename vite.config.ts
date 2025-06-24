import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

export default defineConfig({
    plugins: [react(), vike()],
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
        preprocessorOptions: {
            css: {
                charset: false,
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src',
            '@styles': '/styles',
        },
    },
});
