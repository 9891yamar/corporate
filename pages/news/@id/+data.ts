import { getNewsItem } from '../../../lib/microcms';

// SSRデータの型定義
export interface Data {
    newsItem: any | null;
    error?: string;
}

// サーバーサイドでデータを取得する関数
// Vikeの標準仕様に合わせてdefault exportで定義
export default async function data(pageContext: {
    routeParams: { id: string };
}): Promise<Data> {
    const { id } = pageContext.routeParams;

    try {
        // microCMSから個別記事を取得（サーバーサイドで実行）
        const newsItem = await getNewsItem(id);

        return {
            // ページコンポーネントに渡すプロパティ
            newsItem,
        };
    } catch (error) {
        console.error(
            `❌ [+data.ts] SSRでのニュース記事(ID: ${id})取得に失敗:`,
            error
        );

        // エラー時は404ページを表示するためにnullを返す
        // または適切なエラーハンドリングを実装
        return {
            newsItem: null,
            error: 'ニュース記事が見つかりませんでした',
        };
    }
}
