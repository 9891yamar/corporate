/** @type {import('@ladle/react').UserConfig} */
export default {
    // componentsディレクトリ内のストーリーファイルを対象
    stories: 'components/**/*.stories.{js,jsx,ts,tsx}',

    // ポート設定
    port: 61000,

    // デフォルトストーリー
    defaultStory: 'welcome',

    // 基本的なテーマ設定
    addons: {
        theme: {
            default: 'light',
        },
    },
};
