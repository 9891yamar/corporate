import { createClient } from 'microcms-js-sdk';

// 環境変数の取得を統一的に行う関数
// SSRとクライアントサイドの両方で動作するように設計
const getEnvVars = (): {
    API_KEY: string | undefined;
    SERVICE_DOMAIN: string | undefined;
} => {
    // サーバーサイド（SSR）とクライアントサイドの両方で動作するように
    // process.env と import.meta.env の両方をチェック
    const API_KEY =
        (typeof process !== 'undefined' &&
            process.env?.VITE_MICROCMS_API_KEY) ||
        (typeof import.meta !== 'undefined' &&
            import.meta.env?.VITE_MICROCMS_API_KEY) ||
        undefined;

    const SERVICE_DOMAIN =
        (typeof process !== 'undefined' &&
            process.env?.VITE_MICROCMS_SERVICE_DOMAIN) ||
        (typeof import.meta !== 'undefined' &&
            import.meta.env?.VITE_MICROCMS_SERVICE_DOMAIN) ||
        undefined;

    return { API_KEY, SERVICE_DOMAIN };
};

// 環境変数の取得
const { API_KEY, SERVICE_DOMAIN } = getEnvVars();

// 環境変数が設定されているかチェック
// 開発時にエラーを早期発見するためのチェック
const hasValidEnv = API_KEY && SERVICE_DOMAIN;

if (!hasValidEnv) {
    console.warn(
        '⚠️ [microcms.ts] microCMS環境変数が設定されていません - フォールバックモードで動作します'
    );
}

// microCMSクライアントの作成
// 環境変数が設定されていない場合はnullを返す
export const client =
    API_KEY && SERVICE_DOMAIN
        ? createClient({
              serviceDomain: SERVICE_DOMAIN,
              apiKey: API_KEY,
          })
        : null;

// ニュース記事の型定義
export interface NewsItem {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    category: {
        id: string;
        name: string;
    };
    thumbnail?: {
        url: string;
        height: number;
        width: number;
    };
    excerpt?: string;
    tags?: string[];
}

// ニュースリストのレスポンス型
export interface NewsListResponse {
    contents: NewsItem[];
    totalCount: number;
    offset: number;
    limit: number;
}

// ニュースカテゴリの型定義
export interface Category {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
    slug: string;
}

// ニュース一覧を取得する関数
export const getNewsList = async (
    limit = 10,
    offset = 0
): Promise<NewsListResponse> => {
    try {
        // クライアントがnullの場合（環境変数が設定されていない場合）
        if (!client) {
            console.error(
                '❌ [microcms.ts] microCMSクライアントが初期化されていません'
            );
            throw new Error('microCMSクライアントが初期化されていません');
        }

        const response = await client.get({
            endpoint: 'news',
            queries: {
                limit,
                offset,
                orders: '-publishedAt', // 公開日時の降順でソート
            },
        });

        return response;
    } catch (error) {
        console.error(
            '❌ [microcms.ts] ニュース一覧の取得に失敗しました:',
            error
        );
        throw new Error('ニュース一覧の取得に失敗しました');
    }
};

// 特定のニュース記事を取得する関数
export const getNewsItem = async (id: string): Promise<NewsItem> => {
    try {
        // クライアントがnullの場合（環境変数が設定されていない場合）
        if (!client) {
            console.error(
                '❌ [microcms.ts] microCMSクライアントが初期化されていません'
            );
            throw new Error('microCMSクライアントが初期化されていません');
        }

        const response = await client.get({
            endpoint: 'news',
            contentId: id,
        });

        return response;
    } catch (error) {
        console.error(
            `❌ [microcms.ts] ニュース記事(ID: ${id})の取得に失敗しました:`,
            error
        );
        throw new Error('ニュース記事の取得に失敗しました');
    }
};

// カテゴリ一覧を取得する関数
export const getCategoriesList = async (): Promise<Category[]> => {
    try {
        // クライアントがnullの場合（環境変数が設定されていない場合）
        if (!client) {
            throw new Error('microCMSクライアントが初期化されていません');
        }

        const response = await client.get({
            endpoint: 'categories',
        });
        return response.contents;
    } catch (error) {
        console.error('カテゴリ一覧の取得に失敗しました:', error);
        throw new Error('カテゴリ一覧の取得に失敗しました');
    }
};
