import { getNewsList, type NewsItem } from '../../lib/microcms';

// +data.tsの戻り値型定義
// ページコンポーネントのpropsと一致させる
export interface Data {
    newsItems: NewsItem[];
    totalCount: number;
    error?: boolean;
}

// vike-reactで使用するdata関数
// default exportでdataを定義（Vike標準仕様）
export default async function data(): Promise<Data> {
    try {
        // microCMSからニュース一覧を取得（サーバーサイドで実行）
        const response = await getNewsList(10, 0);

        return {
            // ページコンポーネントに渡すプロパティ
            newsItems: response.contents,
            totalCount: response.totalCount,
            error: false,
        };
    } catch (error) {
        console.error('❌ [+data.ts] SSRでのニュース取得に失敗:', error);

        // エラー時は必ずフォールバック用のダミーデータを返す
        // 本番環境では適切なエラーハンドリングを実装
        const fallbackData: Data = {
            newsItems: [
                {
                    id: 'fallback-1',
                    title: '株式会社サンプル設立のお知らせ',
                    content:
                        'この度、AIを活用したソフトウェア開発支援を事業内容とする株式会社サンプルを設立いたしました。お客様のビジネス成長をサポートしてまいります。',
                    publishedAt: '2025-06-23T00:00:00.000Z',
                    category: { id: '1', name: '会社情報' },
                    createdAt: '2025-06-23T00:00:00.000Z',
                    updatedAt: '2025-06-23T00:00:00.000Z',
                    revisedAt: '2025-06-23T00:00:00.000Z',
                    excerpt: '株式会社サンプルを設立いたしました。',
                } satisfies NewsItem,
                {
                    id: 'fallback-2',
                    title: '新しいAI開発ツールの導入について',
                    content:
                        '最新のAI技術を活用した開発ツールを導入し、より効率的で高品質なソフトウェア開発を実現いたします。',
                    publishedAt: '2025-06-20T00:00:00.000Z',
                    category: { id: '2', name: '技術情報' },
                    createdAt: '2025-06-20T00:00:00.000Z',
                    updatedAt: '2025-06-20T00:00:00.000Z',
                    revisedAt: '2025-06-20T00:00:00.000Z',
                    excerpt: '最新のAI開発ツールを導入しました。',
                } satisfies NewsItem,
            ],
            totalCount: 2,
            error: true, // エラーが発生したことを示すフラグ
        };

        return fallbackData;
    }
}
