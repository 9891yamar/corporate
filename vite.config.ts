import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

export default defineConfig(({ mode }) => {
    // 環境変数を明示的に読み込み
    const env = loadEnv(mode, process.cwd(), '');

    console.log('🔍 [vite.config.ts] 環境変数読み込み状況:', {
        mode,
        VITE_MICROCMS_API_KEY: env.VITE_MICROCMS_API_KEY
            ? '設定済み'
            : '未設定',
        VITE_MICROCMS_SERVICE_DOMAIN: env.VITE_MICROCMS_SERVICE_DOMAIN
            ? '設定済み'
            : '未設定',
    });

    return {
        plugins: [
            react(),
            vike(), // Vike設定は+config.tsに移動
        ],
        // SSRでも環境変数を利用できるように設定
        // VITE_プレフィックスがない環境変数もprocess.envで利用可能
        define: {
            // グローバルなprocess.envオブジェクトを定義
            'process.env.VITE_MICROCMS_API_KEY': JSON.stringify(
                env.VITE_MICROCMS_API_KEY
            ),
            'process.env.VITE_MICROCMS_SERVICE_DOMAIN': JSON.stringify(
                env.VITE_MICROCMS_SERVICE_DOMAIN
            ),
        },
    };
});
