import type { Config } from 'vike/types';

export default {
    // SSRで取得したデータをクライアントサイドにも渡す設定
    passToClient: ['latestNews', 'totalNewsCount', 'error'],
} satisfies Config;
