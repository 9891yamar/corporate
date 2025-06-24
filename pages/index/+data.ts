import { getNewsList, type NewsItem } from '../../lib/microcms';

// トップページのデータ型定義
export interface Data {
    latestNews: NewsItem[];
    totalNewsCount: number;
    error?: boolean;
}

// トップページ用のSSRデータ取得関数
// 最新ニュース3件を取得してトップページに表示
export default async function data(): Promise<Data> {
    try {
        // microCMSから最新ニュース3件を取得
        const response = await getNewsList(3, 0);

        return {
            latestNews: response.contents,
            totalNewsCount: response.totalCount,
            error: false,
        };
    } catch (error) {
        console.error(
            '❌ [index/+data.ts] トップページでのニュース取得に失敗:',
            error
        );

        // エラー時は空のデータを返す
        // 本番環境ではトップページの表示を止めないため
        return {
            latestNews: [],
            totalNewsCount: 0,
            error: true,
        };
    }
}
