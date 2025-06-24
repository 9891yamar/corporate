import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';

export default {
    extends: vikeReact,
    // Vike設定をvite.config.tsから移動
    prerender: false, // SSRを有効にする
} satisfies Config;
