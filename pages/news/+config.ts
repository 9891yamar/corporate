import type { Config } from 'vike/types';

export default {
    // データをクライアントサイドにも渡す設定
    // SSRで生成されたデータをクライアントでも利用可能にする
    passToClient: ['newsItems', 'totalCount', 'error'],

    // ページ設定
    meta: {
        // データ関数がSSRで実行されることを明示
        data: {
            env: { server: true, client: false },
        },
    },
} satisfies Config;
