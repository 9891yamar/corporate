import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

export default defineConfig({
    plugins: [react(), vike()],
    server: {
        host: '0.0.0.0',
        port: 3000,
        watch: {
            usePolling: true,
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
        preprocessorOptions: {
            scss: {
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
